"use node";

import { z } from "zod";

export const brandColorSchema = z.object({
  hex: z.string(),
  label: z.string().nullable(),
});

export const brandFontRoleSchema = z.enum([
  "primary",
  "secondary",
  "accent",
  "body",
  "heading",
]);

export const brandFontSchema = z.object({
  family: z.string(),
  role: brandFontRoleSchema.nullable(),
});

export const brandAnalysisResultSchema = z.object({
  displayName: z.string(),
  domain: z.string(),
  websiteUrl: z.string(),
  email: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  socialLinks: z.array(z.string()),
  overview: z.string().nullable(),
  toneOfVoice: z.array(z.string()),
  brandValues: z.array(z.string()),
  audienceSegments: z.array(z.string()),
  aestheticTags: z.array(z.string()),
  colors: z.array(brandColorSchema),
  fonts: z.array(brandFontSchema),
  logoUrl: z.string().nullable(),
});

export type BrandAnalysisResult = z.infer<typeof brandAnalysisResultSchema>;
