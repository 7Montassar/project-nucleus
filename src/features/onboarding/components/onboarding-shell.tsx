import type { ReactNode } from "react";
import { BrandNav } from "./brand-nav";

interface OnboardingShellProps {
  backHref?: string;
  children: ReactNode;
}

export function OnboardingShell({ backHref, children }: OnboardingShellProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--ivory)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 bg-[length:auto,92px_92px,92px_92px] bg-[radial-gradient(circle_at_22%_14%,rgba(184,138,74,0.12),transparent_22%),linear-gradient(90deg,rgba(17,17,17,0.035)_1px,transparent_1px),linear-gradient(rgba(17,17,17,0.026)_1px,transparent_1px)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.45] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_240_240%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.72%22_numOctaves=%222%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22240%22_height=%22240%22_filter=%22url(%23n)%22_opacity=%220.16%22/%3E%3C/svg%3E')]" />
      <div className="relative">
        <BrandNav backHref={backHref} />
        {children}
      </div>
    </div>
  );
}
