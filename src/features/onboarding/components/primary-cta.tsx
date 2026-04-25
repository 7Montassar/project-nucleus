import Link from "next/link";
import type { ReactNode } from "react";

interface PrimaryCtaProps {
  children: ReactNode;
  href: string;
}

export function PrimaryCta({ children, href }: PrimaryCtaProps) {
  return (
    <Link
      className="group inline-flex h-20 min-w-80 items-center justify-between rounded-none bg-[var(--moss)] px-10 font-medium text-[1.45rem] text-white shadow-[0_16px_40px_rgba(17,17,17,0.08)] transition duration-300 hover:bg-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:outline-offset-4"
      href={href}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="text-3xl text-[var(--gold)] transition-transform duration-300 group-hover:translate-x-2"
      >
        {"->"}
      </span>
    </Link>
  );
}
