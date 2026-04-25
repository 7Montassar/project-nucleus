import { OnboardingShell } from "@/features/onboarding/components/onboarding-shell";
import { ProfilePreview } from "@/features/onboarding/components/profile-preview";
import { WebsiteUrlForm } from "@/features/onboarding/components/website-url-form";

export default function StartPage() {
  return (
    <OnboardingShell backHref="/">
      <main className="mx-auto grid min-h-[calc(100vh-194px)] max-w-[1900px] items-center gap-12 px-6 pb-16 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-14">
        <section className="max-w-[760px]">
          <div className="flex items-center gap-6">
            <span className="flex size-16 items-center justify-center rounded-full border border-[var(--gold)] font-serif text-2xl text-[var(--gold)]">
              01
            </span>
            <span className="font-medium text-xl">Website</span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>
          <h1 className="mt-14 font-serif text-7xl text-[var(--ink)] leading-[0.98] sm:text-8xl">
            Start with your website<span className="text-[var(--gold)]">.</span>
          </h1>
          <p className="mt-9 max-w-[650px] text-2xl text-[var(--muted)] leading-10">
            Paste your homepage URL and Project Nucleus will build the first
            draft of your brand profile.
          </p>
          <WebsiteUrlForm />
        </section>
        <ProfilePreview />
      </main>
    </OnboardingShell>
  );
}
