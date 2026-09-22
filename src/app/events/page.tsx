import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { MonthCalendar } from "@/components/month-calendar";
import { serviceTimes, upcomingEvents, siteConfig } from "@/lib/site-data";
import { ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: `Events | ${siteConfig.name}`,
  description: "Feast days, holy days, and weekly services at " + siteConfig.fullName,
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events Calendar"
        subtitle="Our calendar follows the Ethiopian Orthodox Tewahedo tradition. Every Sunday, Divine Liturgy runs from 4:00 AM to 10:00 AM."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <MonthCalendar />
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink/60">
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-gold/20" /> Sunday Divine Liturgy
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded bg-red/10" /> Feast day
            </span>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-semibold text-navy-dark">
            Weekly Services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {serviceTimes.map((service) => (
              <div
                key={service.name}
                className="flex gap-4 rounded-2xl border border-gold/30 bg-white p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-dark">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink/80">
                    {service.day} · {service.time}
                  </p>
                  {service.note && (
                    <p className="mt-1 text-sm text-ink/60">{service.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-semibold text-navy-dark">
            Major Feast Days
          </h2>
          <ul className="mt-6 flex flex-col divide-y divide-gold/20 rounded-2xl border border-gold/30 bg-white">
            {upcomingEvents.map((event) => (
              <li
                key={event.title}
                className="flex flex-col gap-1 p-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-dark">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">{event.description}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-gold">
                  {event.date}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/60">
            Dates for movable feasts follow the Ethiopian Orthodox calendar and may
            shift year to year. Contact the church office to confirm exact dates.
          </p>
        </div>
      </section>
    </>
  );
}
