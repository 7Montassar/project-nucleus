"use node";

import { createTool } from "@convex-dev/agent";
import Firecrawl, {
  type BrandingProfile,
  type Document,
  type MapData,
} from "@mendable/firecrawl-js";
import { z } from "zod";

const firecrawlToolFormatSchema = z.enum(["branding", "links", "markdown"]);

const firecrawlLocationSchema = z
  .object({
    country: z
      .string()
      .length(2)
      .describe("ISO 3166-1 alpha-2 country code, for example TN or US."),
    languages: z
      .array(z.string())
      .min(1)
      .max(5)
      .optional()
      .describe(
        "Preferred languages in priority order, for example ['fr', 'en']."
      ),
  })
  .optional();

const firecrawlPageSchema = z.object({
  url: z.url().describe("The page URL to scrape."),
  formats: z
    .array(firecrawlToolFormatSchema)
    .min(1)
    .max(3)
    .describe(
      "Requested Firecrawl formats. Use ['branding', 'markdown'] for the homepage and usually ['markdown'] for supporting pages."
    ),
  onlyMainContent: z
    .boolean()
    .optional()
    .describe("Whether Firecrawl should focus on the page main content only."),
});

interface FirecrawlMapLink {
  description?: string;
  title?: string;
  url: string;
}

interface FirecrawlMapToolResult {
  links: FirecrawlMapLink[];
  totalLinks: number;
}

interface FirecrawlScrapeResult {
  pages: Array<{
    branding?: BrandingProfile;
    links?: string[];
    markdown?: string;
    metadata?: Document["metadata"];
    url: string;
  }>;
  totalPages: number;
}

const getFirecrawlClient = (): Firecrawl => {
  const apiKey = process.env.FIRECRAWL_API_KEY;

  if (!apiKey) {
    throw new Error("Missing FIRECRAWL_API_KEY.");
  }

  return new Firecrawl({ apiKey });
};

const toMapResult = (result: MapData): FirecrawlMapToolResult => {
  const links = result.links.map((link) => ({
    description: link.description ?? undefined,
    title: link.title ?? undefined,
    url: link.url,
  }));

  return {
    links,
    totalLinks: links.length,
  };
};

const toScrapePageResult = (
  url: string,
  document: Document
): FirecrawlScrapeResult["pages"][number] => ({
  branding: document.branding,
  links: document.links,
  markdown: document.markdown,
  metadata: document.metadata,
  url,
});

export const mapWebsiteTool = createTool({
  description:
    "Map a website with Firecrawl and return candidate internal URLs for brand analysis.",
  inputSchema: z.object({
    limit: z
      .number()
      .int()
      .min(1)
      .max(5000)
      .default(5000)
      .describe("Optional maximum number of URLs to return."),
    location: firecrawlLocationSchema,
    search: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional search term to rank the most relevant URLs first."),
    sitemap: z
      .enum(["include", "only", "skip"])
      .default("include")
      .describe("Optional how Firecrawl should use the site's sitemap."),
    url: z.url().describe("The website URL to map."),
  }),
  execute: async (_ctx, input): Promise<FirecrawlMapToolResult> => {
    const client = getFirecrawlClient();
    const result = await client.map(input.url, {
      limit: input.limit,
      location: input.location,
      search: input.search,
      sitemap: input.sitemap,
    });

    return toMapResult(result);
  },
});

export const scrapePagesTool = createTool({
  description:
    "Scrape a small set of pages with Firecrawl for brand analysis. Use branding plus markdown for the homepage, and markdown for supporting pages.",
  inputSchema: z.object({
    location: firecrawlLocationSchema,
    maxAge: z
      .number()
      .int()
      .min(0)
      .optional()
      .describe(
        "Cache freshness window in milliseconds. Use 0 to force a fresh scrape."
      ),
    pages: z
      .array(firecrawlPageSchema)
      .min(1)
      .max(10)
      .describe(
        "Pages to scrape. Keep this focused to the most useful pages only."
      ),
  }),
  execute: async (_ctx, input): Promise<FirecrawlScrapeResult> => {
    const client = getFirecrawlClient();
    const pages: FirecrawlScrapeResult["pages"] = [];

    for (const page of input.pages) {
      const document = await client.scrape(page.url, {
        formats: page.formats,
        location: input.location,
        maxAge: input.maxAge,
        onlyMainContent: page.onlyMainContent,
      });

      pages.push(toScrapePageResult(page.url, document));
    }

    return {
      pages,
      totalPages: pages.length,
    };
  },
});

export const firecrawlTools = {
  mapWebsite: mapWebsiteTool,
  scrapePages: scrapePagesTool,
} as const;
