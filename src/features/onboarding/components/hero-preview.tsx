import Image from "next/image";
import {
  audienceSignals,
  brandColors,
  brandMetrics,
} from "../data/brand-profile";

const signalToneClassNames = {
  clay: "bg-[var(--clay)]",
  moss: "bg-[var(--moss)]",
  sage: "bg-[var(--sage)]",
} as const;

const directionClassNames = {
  Considered: "bg-[var(--sand)]",
  Natural: "bg-[var(--moss)]",
  Optimistic: "bg-[var(--sage)]",
  Timeless: "bg-[var(--clay)]",
} as const;

const directionLabels = [
  "Natural",
  "Considered",
  "Optimistic",
  "Timeless",
] as const;

export function HeroPreview() {
  return (
    <div>
      <div className="space-y-4 lg:hidden">
        <div className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--sand)] shadow-[0_20px_60px_rgba(17,17,17,0.12)]">
          <Image
            alt="Layered brand intelligence materials"
            className="aspect-[4/3] w-full object-cover"
            height={1003}
            priority
            src="/images/onboarding/brand-intelligence-still.png"
            width={1568}
          />
        </div>
        <section className="rounded-md border border-[var(--line)] bg-[rgba(250,248,245,0.96)] p-6 shadow-[0_18px_54px_rgba(17,17,17,0.1)]">
          <p className="font-semibold text-[var(--ink)]">Brand overview</p>
          <p className="mt-1 text-[var(--muted)] text-sm">
            Your brand at a glance.
          </p>
          <div className="mt-6 grid grid-cols-3 divide-x divide-[var(--line)]">
            {brandMetrics.map((metric) => (
              <div className="px-3 first:pl-0 last:pr-0" key={metric.label}>
                <p className="text-[var(--muted)] text-xs">{metric.label}</p>
                <p className="font-serif text-4xl leading-none">
                  {metric.value}
                </p>
                <p className="mt-2 text-[var(--muted)] text-xs">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-5 gap-2">
            {brandColors.map((color) => (
              <span
                aria-hidden="true"
                className="aspect-square rounded-sm"
                key={color.name}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="relative hidden min-h-[620px] lg:block lg:min-h-[690px]">
        <div className="absolute top-5 right-8 h-[74%] w-[48%] rounded-md bg-[var(--moss)] shadow-[0_24px_80px_rgba(17,17,17,0.12)]" />
        <div className="absolute top-0 left-[20%] h-[82%] w-[44%] rounded-md border border-[var(--line)] bg-[var(--sand)] shadow-[0_24px_70px_rgba(17,17,17,0.07)]" />
        <div className="absolute top-12 right-24 h-[54%] w-[64%] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--sand)] shadow-[0_28px_90px_rgba(17,17,17,0.14)]">
          <Image
            alt="Layered brand intelligence materials"
            className="h-full w-full object-cover"
            height={1003}
            priority
            src="/images/onboarding/brand-intelligence-still.png"
            width={1568}
          />
        </div>

        <section className="absolute top-[18%] left-2 w-[410px] rounded-md border border-[var(--line)] bg-[rgba(250,248,245,0.94)] p-7 shadow-[0_18px_54px_rgba(17,17,17,0.12)] backdrop-blur">
          <p className="font-semibold text-[var(--ink)]">Brand overview</p>
          <p className="mt-1 text-[var(--muted)] text-sm">
            Your brand at a glance.
          </p>
          <div className="mt-7 grid grid-cols-3 divide-x divide-[var(--line)]">
            {brandMetrics.map((metric) => (
              <div className="px-4 first:pl-0 last:pr-0" key={metric.label}>
                <p className="text-[var(--muted)] text-xs">{metric.label}</p>
                <p className="font-serif text-5xl leading-none">
                  {metric.value}
                </p>
                <p className="mt-2 text-[var(--muted)] text-xs">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-[var(--line)] border-t pt-5">
            <p className="font-semibold text-sm">Brand colors</p>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {brandColors.map((color) => (
                <div key={color.name}>
                  <span
                    aria-hidden="true"
                    className="block aspect-square rounded-sm"
                    style={{ backgroundColor: color.value }}
                  />
                  <span className="mt-2 block text-[0.68rem] text-[var(--muted)]">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="absolute top-[36%] right-0 w-[380px] rounded-md border border-[var(--line)] bg-[rgba(250,248,245,0.96)] p-6 shadow-[0_18px_54px_rgba(17,17,17,0.13)]">
          <p className="border-[var(--line)] border-b pb-4 font-semibold">
            Audience signals
          </p>
          <div className="mt-5 space-y-5">
            {audienceSignals.map((signal, index) => (
              <div className="flex gap-4" key={signal.label}>
                <span
                  className={`${signalToneClassNames[signal.tone]} flex size-12 shrink-0 items-center justify-center rounded-full text-white`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold text-sm">
                    {signal.label}
                  </span>
                  <span className="mt-1 block text-[var(--muted)] text-xs leading-5">
                    {signal.detail}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="absolute bottom-12 left-[10%] w-[345px] rounded-md border border-[var(--line)] bg-[rgba(250,248,245,0.96)] p-6 shadow-[0_18px_54px_rgba(17,17,17,0.1)]">
          <p className="border-[var(--line)] border-b pb-3 font-semibold">
            Positioning
          </p>
          <div className="mt-5 flex items-center gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[var(--gold)]">
              +
            </span>
            <p className="text-[var(--muted)] text-sm leading-6">
              You help growth-minded teams make sharper decisions that compound
              positive impact.
            </p>
          </div>
        </section>

        <section className="absolute right-12 bottom-0 w-[520px] rounded-md border border-[var(--line)] bg-[rgba(250,248,245,0.96)] p-6 shadow-[0_18px_54px_rgba(17,17,17,0.12)]">
          <p className="border-[var(--line)] border-b pb-4 font-semibold">
            Creative direction
          </p>
          <div className="mt-5 grid grid-cols-4 gap-3">
            {directionLabels.map((label) => (
              <div key={label}>
                <span
                  className={`${directionClassNames[label]} block h-20 rounded-sm`}
                />
                <span className="mt-3 block text-center text-[var(--muted)] text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
