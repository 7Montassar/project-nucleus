"use node";

import { google } from "@ai-sdk/google";
import { googleTools } from "@ai-sdk/google/internal";
import { Agent } from "@convex-dev/agent";
import { components } from "../_generated/api";
import { brandAnalysisInstructions } from "./prompts";
import { firecrawlTools } from "./tools";

export const brandAnalysisAgent = new Agent(components.agent, {
  name: "Brand Analysis Agent",
  instructions: brandAnalysisInstructions,
  languageModel: google.chat("gemini-2.5-flash"),
  tools: {
    ...firecrawlTools,
    google_search: googleTools.googleSearch({}),
  },
});
