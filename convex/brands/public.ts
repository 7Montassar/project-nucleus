"use node";

import { v } from "convex/values";
import { action } from "../_generated/server";
import { brandAnalysisAgent } from "./agent";
import {
  type BrandAnalysisResult,
  brandAnalysisResultSchema,
} from "./analysis";

export const analyzeWebsite = action({
  args: {
    websiteUrl: v.string(),
  },
  handler: async (
    ctx,
    args
  ): Promise<{
    analysis: BrandAnalysisResult;
    threadId: string;
  }> => {
    const { thread } = await brandAnalysisAgent.createThread(ctx, {});

    const result = await thread.generateObject({
      prompt: `Analyze the brand behind this website: ${args.websiteUrl}

Start from this URL, use your tools as needed, and return the structured brand analysis.`,
      schema: brandAnalysisResultSchema,
    });

    return {
      analysis: result.object,
      threadId: thread.threadId,
    };
  },
});
