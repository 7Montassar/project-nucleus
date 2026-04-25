export function WebsiteUrlForm() {
  return (
    <form action="/start" className="mt-12 max-w-[650px]" method="get">
      <label
        className="block font-semibold text-[var(--ink)]"
        htmlFor="website-url"
      >
        Website URL
      </label>
      <input
        className="mt-4 h-20 w-full rounded-sm border border-[var(--border-strong)] bg-[rgba(250,248,245,0.72)] px-7 text-[var(--ink)] text-xl outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--moss)] focus:bg-[var(--ivory)] focus:shadow-[0_0_0_4px_rgba(38,66,54,0.08)]"
        id="website-url"
        inputMode="url"
        name="websiteUrl"
        placeholder="https://yourbrand.com"
        required
        type="url"
      />
      <button
        className="group mt-6 flex h-20 w-full items-center justify-between rounded-sm bg-[var(--ink)] px-8 font-medium text-white text-xl shadow-[0_16px_40px_rgba(17,17,17,0.08)] transition duration-300 hover:bg-[var(--moss)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)] focus-visible:outline-offset-4"
        type="submit"
      >
        <span>Analyze brand</span>
        <span
          aria-hidden="true"
          className="text-3xl text-[var(--gold)] transition-transform duration-300 group-hover:translate-x-2"
        >
          {"->"}
        </span>
      </button>
      <p className="mt-6 text-[var(--muted)] text-lg">
        Takes about a minute. You can edit everything after analysis.
      </p>
    </form>
  );
}
