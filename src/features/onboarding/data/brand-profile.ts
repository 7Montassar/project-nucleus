export const brandMetrics = [
  { label: "Clarity", value: "86", note: "Strong" },
  { label: "Difference", value: "74", note: "Defined" },
  { label: "Momentum", value: "68", note: "Emerging" },
] as const;

export const brandColors = [
  { name: "Moss", value: "#264236" },
  { name: "Sage", value: "#6f8277" },
  { name: "Ivory", value: "#f6f3ef" },
  { name: "Clay", value: "#c56a4e" },
  { name: "Ink", value: "#111111" },
] as const;

export const audienceSignals = [
  {
    label: "Purpose-driven leaders",
    detail: "Care about measurable impact and long-term value.",
    tone: "moss",
  },
  {
    label: "Mid-market teams",
    detail: "Scaling operations, growth, and creative output.",
    tone: "sage",
  },
  {
    label: "Strategy influencers",
    detail: "Need clarity before choosing a direction.",
    tone: "clay",
  },
] as const;

export const profileIncludes = [
  {
    title: "Brand positioning",
    body: "Mission, value proposition, differentiators, and market context.",
    tone: "moss",
  },
  {
    title: "Audience insights",
    body: "Who you serve, what they care about, and how you connect.",
    tone: "sage",
  },
  {
    title: "Brand voice",
    body: "Tone, personality, and messaging that sound like you.",
    tone: "clay",
  },
  {
    title: "Visual direction",
    body: "Color palette, typography, and creative direction cues.",
    tone: "gold",
  },
] as const;
