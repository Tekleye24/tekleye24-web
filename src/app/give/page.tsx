import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { DonateForm } from "@/components/donate-form";
import { givingOptions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Give | ${siteConfig.name}`,
  description: `Ways to support the ministry of ${siteConfig.fullName}.`,
};

const onlineGivingEnabled = Boolean(process.env.STRIPE_SECRET_KEY);

export default function GivePage() {
  return (
    <>
      <PageHeader
        title="Give"
        subtitle="Your generosity sustains our worship, ministries, and outreach."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-2xl text-ink/70">
            &ldquo;Each of you should give what you have decided in your heart to give, not
            reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            (2 Corinthians 9:7)
          </p>

          <div className="mt-10 rounded-2xl border border-gold/40 bg-navy p-8 text-cream sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wide text-gold-light">
              Preferred Method
            </span>
            <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
              Give via Zelle
            </h2>
            <p className="mt-3 max-w-lg text-cream/80">
              Open your bank&apos;s app, choose Zelle, and send your gift to:
            </p>
            <p className="mt-4 font-serif text-3xl font-semibold text-gold-light sm:text-4xl">
              {siteConfig.zellePhone}
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {onlineGivingEnabled ? (
              <DonateForm />
            ) : (
              <div className="rounded-2xl border border-gold/30 bg-white p-6 sm:p-8">
                <h3 className="font-serif text-lg font-semibold text-navy-dark">
                  Give Online
                </h3>
                <p className="mt-2 text-sm text-ink/70">
                  Card, Apple Pay, and Google Pay giving is coming soon. For now, please
                  use Zelle or one of the other methods listed here.
                </p>
              </div>
            )}

            <div>
              <h2 className="font-serif text-xl font-semibold text-navy-dark">
                Other Ways to Give
              </h2>
              <div className="mt-4 flex flex-col gap-4">
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

              <div className="mt-4 rounded-2xl border border-gold/30 bg-cream p-6">
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
          </div>
        </div>
      </section>
    </>
  );
}
