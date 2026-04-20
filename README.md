# Project Nucleus

Project Nucleus is an AI tool for brands and businesses.

Its goal is to help a business understand its brand, turn that understanding into usable marketing context, and later use that context to create better campaigns and creatives.

The product starts with one simple workflow:

1. The user enters a brand website URL.
2. The app analyzes the brand.
3. The user reviews and edits the extracted brand profile.
4. That profile becomes the base for future marketing features.

## Current Focus

The first feature is `Brand Analysis`.

From a website, the app should extract useful brand information such as (name, domain, overview, colors, values , aesthetic...)

The saved profile becomes the brand's working context inside the app. Future features should use this context instead of asking the user to repeat the same brand information again and again.

## Product Context

The long-term vision is not just to analyze a brand website.

The real value is:

- understanding the brand clearly
- keeping that understanding in one place
- using it to support marketing decisions
- generating on-brand outputs faster

In simple terms, Project Nucleus should become a brand and marketing workspace powered by AI.

## Later Features

After the brand analysis flow, the product could expand into:

- Competitor analysis
- Market positioning insights
- Opportunity and messaging gaps
- Campaign idea generation
- Ad copy and caption generation
- Poster and creative generation
- Short-form video creative ideas
- Multi-platform content adaptation
- Content calendar generation
- Brand voice and visual guardrails

The main rule is to add these features only when the core brand analysis flow is solid.

## Tech Stack

- Next.js
- Convex

## Principle

Build the product as simply as possible.

- Start minimal
- Avoid unnecessary abstraction
- Avoid premature features
- Keep the first version focused

## Development

```bash
bun dev
```

## Status

Early MVP. Current work is focused on the brand analysis flow.
