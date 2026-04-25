import Image from "next/image";
import { brandColors, profileIncludes } from "../data/brand-profile";

const toneClassNames = {
  moss: "bg-[var(--moss)]",
  sage: "bg-[var(--sage)]",
  clay: "bg-[var(--clay)]",
  gold: "bg-[var(--gold)]",
} as const;

const iconClassName = "size-5";

function ProfileIcon({ title }: { title: string }) {
  if (title === "Brand positioning") {
    return (
      <svg
        aria-hidden="true"
        className={iconClassName}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 4V2.5M12 21.5V20M20 12h1.5M2.5 12H4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (title === "Audience insights") {
    return (
      <svg
        aria-hidden="true"
        className={iconClassName}
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle
          cx="16.5"
          cy="9.5"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3.5 19c.7-3.6 2.7-5.4 5.5-5.4s4.8 1.8 5.5 5.4M13.8 15c1-.7 2-1 3.1-.9 2.1.2 3.6 1.8 4.1 4.9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (title === "Brand voice") {
    return (
      <svg
        aria-hidden="true"
        className={iconClassName}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 7.5h14M5 12h10M5 16.5h7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M18 12.5 21 10v7l-3-2.4v-2.1Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={iconClassName}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 19 19 5M7 7l2 2M15 15l2 2M4 12h3M17 12h3M12 4v3M12 17v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m8 16 8-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

export function ProfilePreview() {
  return (
    <div>
      <section className="space-y-6 rounded-md border border-[var(--line)] bg-[rgba(250,248,245,0.96)] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.12)] lg:hidden">
        <h2 className="font-medium text-2xl">
          Your brand profile{" "}
          <span className="text-[var(--muted)]">will include:</span>
        </h2>
        <div className="overflow-hidden rounded-sm">
          <Image
            alt="Structured brand profile materials"
            className="aspect-[4/3] w-full object-cover"
            height={1024}
            src="/images/onboarding/website-to-profile-still.png"
            width={1536}
          />
        </div>
        <div className="divide-y divide-[var(--line)]">
          {profileIncludes.map((item) => (
            <article className="flex gap-4 py-5 first:pt-0" key={item.title}>
              <span
                className={`${toneClassNames[item.tone]} flex size-12 shrink-0 items-center justify-center rounded-full text-white`}
              >
                <ProfileIcon title={item.title} />
              </span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-[var(--muted)] text-sm leading-6">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="relative hidden min-h-[620px] lg:block">
        <div className="absolute top-4 right-0 h-[72%] w-[42%] rounded-md bg-[var(--moss)] shadow-[0_24px_80px_rgba(17,17,17,0.12)]" />
        <div className="absolute top-0 left-[14%] h-[84%] w-[70%] rounded-md border border-[var(--line)] bg-[var(--sand)] shadow-[0_24px_70px_rgba(17,17,17,0.08)]" />
        <section className="absolute top-14 left-0 w-[86%] rounded-md border border-[var(--line)] bg-[rgba(250,248,245,0.96)] p-8 shadow-[0_24px_70px_rgba(17,17,17,0.14)]">
          <h2 className="font-medium text-2xl">
            Your brand profile{" "}
            <span className="text-[var(--muted)]">will include:</span>
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_260px]">
            <div className="divide-y divide-[var(--line)]">
              {profileIncludes.map((item) => (
                <article
                  className="flex gap-5 py-5 first:pt-0"
                  key={item.title}
                >
                  <span
                    className={`${toneClassNames[item.tone]} flex size-14 shrink-0 items-center justify-center rounded-full text-white`}
                  >
                    <ProfileIcon title={item.title} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-[25rem] text-[var(--muted)] text-sm leading-6">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="space-y-5">
              <div className="overflow-hidden rounded-sm">
                <Image
                  alt="Structured brand profile materials"
                  className="aspect-[5/4] w-full object-cover"
                  height={1024}
                  src="/images/onboarding/website-to-profile-still.png"
                  width={1536}
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {brandColors.map((color) => (
                  <span
                    aria-hidden="true"
                    className="aspect-square rounded-sm"
                    key={color.name}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
              <div className="rounded-sm bg-[var(--sand)] p-5">
                <p className="font-serif text-5xl">Aa</p>
                <div className="mt-4 space-y-2">
                  <span className="block h-2 w-full bg-[var(--line)]" />
                  <span className="block h-2 w-4/5 bg-[var(--line)]" />
                  <span className="block h-2 w-2/3 bg-[var(--line)]" />
                </div>
                <p className="mt-5 border-[var(--line)] border-t pt-4 font-serif text-2xl italic">
                  Clarity over noise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
