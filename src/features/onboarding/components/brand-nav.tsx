import Link from "next/link";
import { BrandMark } from "./brand-mark";

interface BrandNavProps {
  backHref?: string;
}

export function BrandNav({ backHref }: BrandNavProps) {
  return (
    <header className="mx-auto flex w-full max-w-[1900px] flex-col gap-9 px-6 pt-7 sm:px-10 lg:px-14">
      <div className="flex items-center justify-between border-[var(--line)] border-b pb-6">
        <Link
          aria-label="Project Nucleus home"
          className="group flex items-center gap-4"
          href="/"
        >
          <BrandMark />
          <span className="font-medium text-[1.45rem] text-[var(--ink)] leading-none">
            Project Nucleus
          </span>
        </Link>
        <span
          aria-hidden="true"
          className="relative size-8 text-[var(--gold)] before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-current after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-current"
        />
      </div>

      {backHref ? (
        <Link
          className="group inline-flex w-fit items-center gap-3 font-medium text-[var(--ink)] text-lg"
          href={backHref}
        >
          <span
            aria-hidden="true"
            className="transition-transform group-hover:-translate-x-1"
          >
            {"<-"}
          </span>
          Back
        </Link>
      ) : null}
    </header>
  );
}
