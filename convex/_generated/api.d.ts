/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as brands_agent from "../brands/agent.js";
import type * as brands_analysis from "../brands/analysis.js";
import type * as brands_internal from "../brands/internal.js";
import type * as brands_prompts from "../brands/prompts.js";
import type * as brands_public from "../brands/public.js";
import type * as brands_tools from "../brands/tools.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  "brands/agent": typeof brands_agent;
  "brands/analysis": typeof brands_analysis;
  "brands/internal": typeof brands_internal;
  "brands/prompts": typeof brands_prompts;
  "brands/public": typeof brands_public;
  "brands/tools": typeof brands_tools;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  agent: import("@convex-dev/agent/_generated/component.js").ComponentApi<"agent">;
};
