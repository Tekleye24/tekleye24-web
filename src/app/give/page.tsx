import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { givingOptions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Give | ${siteConfig.name}`,
  description: `Ways to support the ministry of ${siteConfig.fullName}.`,
};

export default function GivePage() {
  return (
    <>
      <PageHeader
        title="Give"
        subtitle="Your generosity sustains our worship, ministries, and outreach."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="max-w-2xl text-ink/70">
            &ldquo;Each of you should give what you have decided in your heart to give, not
            reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            (2 Corinthians 9:7)
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {givingOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-2xl border border-gold/30 bg-white p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-navy-dark">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold/30 bg-cream p-6">
            <h3 className="font-serif text-lg font-semibold text-navy-dark">
              Questions about giving?
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Reach out to the church office at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-medium text-navy hover:underline">
                {siteConfig.email}
              </a>{" "}
              or{" "}
              <a href={`tel:${siteConfig.phone}`} className="font-medium text-navy hover:underline">
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
