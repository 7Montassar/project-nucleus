import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const colorToken = v.object({
  hex: v.string(),
  label: v.optional(v.string()),
});

const fontToken = v.object({
  family: v.string(),
  role: v.optional(
    v.union(
      v.literal("primary"),
      v.literal("secondary"),
      v.literal("accent"),
      v.literal("body"),
      v.literal("heading")
    )
  ),
});

export default defineSchema({
  brands: defineTable({
    ownerTokenIdentifier: v.optional(v.string()),
    websiteUrl: v.string(),
    displayName: v.string(),
    domain: v.string(),
    email: v.optional(v.string()),
    phoneNumber: v.optional(v.string()),
    socialLinks: v.optional(v.array(v.string())),
    analysisStatus: v.union(
      v.literal("pending"),
      v.literal("running"),
      v.literal("completed"),
      v.literal("failed")
    ),
    analysisErrorMessage: v.optional(v.string()),
    currentDnaId: v.optional(v.id("brand_dna")),
    analysisStartedAt: v.optional(v.number()),
    lastAnalyzedAt: v.optional(v.number()),
  }).index("by_domain", ["domain"]),

  brand_dna: defineTable({
    brandId: v.id("brands"),
    status: v.union(v.literal("draft"), v.literal("approved")),
    overview: v.optional(v.string()),
    toneOfVoice: v.array(v.string()),
    brandValues: v.array(v.string()),
    audienceSegments: v.array(v.string()),
    aestheticTags: v.array(v.string()),
    colors: v.array(colorToken),
    fonts: v.array(fontToken),
    logoUrl: v.optional(v.string()),
  }).index("by_brandId", ["brandId"]),
});
