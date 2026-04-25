import { BrandMark } from "./brand-mark";

export function StepStrip() {
  return (
    <aside className="border-[var(--line)] border-t bg-[rgba(233,228,218,0.45)]">
      <div className="mx-auto grid max-w-[1900px] items-center gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[160px_1fr_1.15fr_360px] lg:px-14">
        <span className="font-serif text-3xl text-[var(--gold)]">01</span>
        <div className="border-[var(--line)] border-l pl-10">
          <p className="font-medium text-3xl">Start with your website</p>
        </div>
        <p className="max-w-md text-[var(--muted)] leading-7">
          We analyze your site to surface what makes your brand distinct and
          give your team a foundation to build on.
        </p>
        <div className="hidden items-center justify-end gap-8 lg:flex">
          <span className="h-px flex-1 border-[var(--gold)] border-t border-dashed" />
          <BrandMark size="lg" />
        </div>
      </div>
    </aside>
  );
}
