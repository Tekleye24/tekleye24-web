"use client";

import { useMemo, useState } from "react";
import { upcomingEvents } from "@/lib/site-data";
import { ethiopianMonthAbbr, ethiopianMonthName, toEthiopian } from "@/lib/ethiopian-calendar";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type DayCell = {
  date: Date;
  inMonth: boolean;
};

function buildMonthGrid(year: number, month: number): DayCell[] {
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const gridStart = new Date(year, month, 1 - startOffset);

  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + i);
    return { date, inMonth: date.getMonth() === month };
  });
}

export function MonthCalendar() {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const grid = useMemo(
    () => buildMonthGrid(cursor.getFullYear(), cursor.getMonth()),
    [cursor],
  );

  const ethiopianRangeLabel = useMemo(() => {
    const lastOfMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
    const first = toEthiopian(cursor);
    const last = toEthiopian(lastOfMonth);

    if (first.year === last.year && first.month === last.month) {
      return `${ethiopianMonthName(first.month)} ${first.year}`;
    }
    if (first.year === last.year) {
      return `${ethiopianMonthName(first.month)}–${ethiopianMonthName(last.month)} ${first.year}`;
    }
    return `${ethiopianMonthName(first.month)} ${first.year}–${ethiopianMonthName(last.month)} ${last.year}`;
  }, [cursor]);

  const eventsByKey = useMemo(() => {
    const map = new Map<string, typeof upcomingEvents>();
    for (const event of upcomingEvents) {
      if (event.month === undefined || event.day === undefined) continue;
      const key = `${event.month}-${event.day}`;
      map.set(key, [...(map.get(key) ?? []), event]);
    }
    return map;
  }, []);

  function isSameDay(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/30 bg-white">
      <div className="flex items-center justify-between bg-navy px-5 py-4 text-cream sm:px-6">
        <button
          type="button"
          onClick={() => setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))}
          className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
          aria-label="Previous month"
        >
          ←
        </button>
        <div className="text-center">
          <h3 className="font-serif text-lg font-semibold sm:text-xl">
            {MONTH_NAMES[cursor.getMonth()]} {cursor.getFullYear()}
          </h3>
          <p className="text-xs text-cream/70">{ethiopianRangeLabel} E.C.</p>
        </div>
        <button
          type="button"
          onClick={() => setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))}
          className="rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 border-b border-gold/20 bg-cream text-center text-xs font-semibold uppercase tracking-wide text-navy/70">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-2.5">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {grid.map(({ date, inMonth }) => {
          const weekday = date.getDay();
          const isSunday = weekday === 0;
          const isVespersDay = weekday === 3 || weekday === 5;
          const isKidanDay = weekday >= 1 && weekday <= 6;
          const key = `${date.getMonth() + 1}-${date.getDate()}`;
          const feastEvents = inMonth ? eventsByKey.get(key) : undefined;
          const isToday = isSameDay(date, today);
          const ethiopian = toEthiopian(date);

          return (
            <div
              key={date.toISOString()}
              className={`flex min-h-24 flex-col gap-1 border-b border-r border-gold/10 p-2 last:border-r-0 sm:min-h-28 ${
                inMonth ? "bg-white" : "bg-cream/50"
              }`}
            >
              <div className="flex items-baseline gap-1.5">
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                    isToday
                      ? "bg-navy text-cream"
                      : inMonth
                        ? "text-ink/80"
                        : "text-ink/30"
                  }`}
                >
                  {date.getDate()}
                </span>
                <span className={`text-[10px] ${inMonth ? "text-ink/40" : "text-ink/20"}`}>
                  {ethiopian.day === 1
                    ? `${ethiopianMonthAbbr(ethiopian.month)} 1`
                    : ethiopian.day}
                </span>
              </div>

              {inMonth && isKidanDay && (
                <span className="rounded bg-ink/10 px-1.5 py-1 text-[11px] font-medium leading-tight text-ink/70">
                  Kidan 7–8 AM
                </span>
              )}

              {inMonth && isSunday && (
                <span className="rounded bg-gold/20 px-1.5 py-1 text-[11px] font-medium leading-tight text-navy-dark">
                  Liturgy 4–10 AM
                </span>
              )}

              {inMonth && isVespersDay && (
                <span className="rounded bg-navy/10 px-1.5 py-1 text-[11px] font-medium leading-tight text-navy-dark">
                  Vespers 7–9 PM
                </span>
              )}

              {feastEvents?.map((event) => (
                <span
                  key={event.title}
                  className="rounded bg-red/10 px-1.5 py-1 text-[11px] font-medium leading-tight text-red-dark"
                  title={event.description}
                >
                  {event.title}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
