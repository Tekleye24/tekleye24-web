import Link from "next/link";
import { ChurchLogo } from "@/components/church-logo";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--gold-light) 0, transparent 35%), radial-gradient(circle at 85% 75%, var(--gold) 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
        <ChurchLogo className="h-36 w-36 drop-shadow-lg sm:h-44 sm:w-44" priority />
        <h1 className="mt-8 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {siteConfig.fullName}
        </h1>
        <p className="mt-5 max-w-xl text-base text-cream/80 sm:text-lg">{siteConfig.tagline}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/about"
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-light"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/events"
            className="rounded-full border border-cream/40 px-7 py-3 text-sm font-semibold text-cream transition-colors hover:bg-white/10"
          >
            Upcoming Feast Days
          </Link>
        </div>
      </div>
    </section>
  );
}
