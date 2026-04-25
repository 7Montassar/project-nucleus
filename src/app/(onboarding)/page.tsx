import { HeroPreview } from "@/features/onboarding/components/hero-preview";
import { OnboardingShell } from "@/features/onboarding/components/onboarding-shell";
import { PrimaryCta } from "@/features/onboarding/components/primary-cta";
import { StepStrip } from "@/features/onboarding/components/step-strip";

export default function Home() {
  return (
    <OnboardingShell>
      <main>
        <section className="mx-auto grid min-h-[calc(100vh-118px)] max-w-[1900px] items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-14 lg:py-16">
          <div className="max-w-[760px]">
            <h1 className="font-serif text-7xl text-[var(--ink)] leading-[0.97] sm:text-8xl lg:text-9xl">
              Brand intelligence for sharper marketing
              <span className="text-[var(--gold)]">.</span>
            </h1>
            <p className="mt-10 max-w-[590px] text-2xl text-[var(--muted)] leading-10">
              Turn a website into a living brand profile your team can build
              from.
            </p>
            <div className="mt-9">
              <PrimaryCta href="/start">Get started</PrimaryCta>
            </div>
            <p className="mt-8 flex items-center gap-4 text-[var(--muted)]">
              <span
                aria-hidden="true"
                className="inline-flex size-7 items-center justify-center rounded-full border border-[var(--gold)] text-[var(--gold)]"
              >
                +
              </span>
              Built for marketers, founders, and creative teams.
            </p>
          </div>
          <HeroPreview />
        </section>
        <StepStrip />
      </main>
    </OnboardingShell>
  );
}
