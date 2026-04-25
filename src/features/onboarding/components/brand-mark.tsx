interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
}

const sizeClassNames = {
  sm: "size-9",
  md: "size-11",
  lg: "size-16",
} as const;

export function BrandMark({ size = "md" }: BrandMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`${sizeClassNames[size]} relative inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]`}
    >
      <span className="absolute h-[72%] w-[38%] rounded-full border border-current" />
      <span className="absolute h-[38%] w-[72%] rounded-full border border-current" />
      <span className="absolute h-[72%] w-[38%] rotate-45 rounded-full border border-current" />
      <span className="absolute size-1.5 rounded-full bg-current" />
    </span>
  );
}
