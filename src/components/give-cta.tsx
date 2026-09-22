import Link from "next/link";

export function GiveCta() {
  return (
    <section className="bg-navy-dark px-5 py-16 text-cream sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
          Support the Ministry of Our Parish
        </h2>
        <p className="max-w-xl text-cream/75">
          Your offerings sustain our services, outreach, and the upkeep of our church
          home.
        </p>
        <Link
          href="/give"
          className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-light"
        >
          Ways to Give
        </Link>
      </div>
    </section>
  );
}
