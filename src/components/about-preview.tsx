import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div className="order-2 aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-navy/10 via-gold/10 to-navy/5 md:order-1" />
        <div className="order-1 md:order-2">
          <h2 className="font-serif text-3xl font-semibold text-navy-dark">
            Rooted in the Tewahedo Faith
          </h2>
          <p className="mt-4 text-ink/70">
            Our parish carries forward nearly two thousand years of Ethiopian Orthodox
            Tewahedo tradition — the Divine Liturgy, the fasts and feasts of the church
            calendar, and a community bound together in worship, service, and love for
            Christ.
          </p>
          <p className="mt-4 text-ink/70">
            Whether you were raised in the faith or are visiting for the first time,
            you are welcome here.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-full border border-navy px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            Learn About Our Parish
          </Link>
        </div>
      </div>
    </section>
  );
}
