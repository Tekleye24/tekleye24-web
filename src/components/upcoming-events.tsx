import Link from "next/link";
import { upcomingEvents } from "@/lib/site-data";

export function UpcomingEvents() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl font-semibold text-navy-dark">
              Upcoming Feast Days & Events
            </h2>
            <p className="mt-3 text-ink/70">
              Celebrated according to the Ethiopian Orthodox calendar.
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm font-semibold text-navy hover:text-navy-dark"
          >
            View full calendar →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="flex flex-col rounded-2xl border border-gold/30 bg-white p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {event.date}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-navy-dark">
                {event.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
