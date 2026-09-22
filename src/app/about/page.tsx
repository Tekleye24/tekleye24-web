import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { clergy, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn about the history, faith, and leadership of ${siteConfig.fullName}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Our Parish"
        subtitle="Our history, our faith, and the people who serve our community."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-navy-dark">Our Story</h2>
          <p className="mt-4 text-ink/70">
            {siteConfig.name} was founded to serve the Ethiopian Orthodox Tewahedo
            community, offering a home for worship rooted in one of the oldest
            Christian traditions in the world. Since our founding, we have grown into
            a diverse congregation united by the Divine Liturgy, the sacraments, and
            service to one another.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-navy-dark">
            The Tewahedo Faith
          </h2>
          <p className="mt-4 text-ink/70">
            &ldquo;Tewahedo&rdquo; means &ldquo;being made one,&rdquo; reflecting our belief in the united
            divine and human nature of Christ. Our worship follows the ancient
            liturgical traditions of the Ethiopian Orthodox Church, including the
            Ge&apos;ez liturgy, the fasting calendar, and the veneration of the saints
            and the Holy Trinity.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-navy-dark">
            Our Mission
          </h2>
          <p className="mt-4 text-ink/70">
            To proclaim the Gospel of Jesus Christ, preserve the teachings and
            traditions of the Ethiopian Orthodox Tewahedo Church, and nurture a
            community grounded in prayer, fellowship, and service.
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-semibold text-navy-dark">
            Our Clergy
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {clergy.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-gold/30 bg-white p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-navy-dark">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-sm text-ink/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
