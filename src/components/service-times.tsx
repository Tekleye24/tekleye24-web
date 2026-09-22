import { ClockIcon } from "@/components/icons";
import { serviceTimes } from "@/lib/site-data";

export function ServiceTimes() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-semibold text-navy-dark">
            Weekly Services
          </h2>
          <p className="mt-3 text-ink/70">
            Join us in worship and prayer throughout the week.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {serviceTimes.map((service) => (
            <div
              key={service.name}
              className="flex gap-4 rounded-2xl border border-gold/30 bg-white p-6 shadow-sm"
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
  );
}
