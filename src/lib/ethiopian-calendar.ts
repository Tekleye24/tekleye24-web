// Gregorian → Ethiopian (Ge'ez) calendar conversion.
//
// The Ethiopian New Year (Meskerem 1) falls on September 11 in the Gregorian
// calendar, or September 12 in the Gregorian year immediately preceding a
// Gregorian leap year. Ethiopian months are 12 months of exactly 30 days
// plus Pagume (5 days, or 6 in an Ethiopian leap year) — so counting days
// from New Year's day naturally lands on the right month/day, leap years
// included, with no separate month-length table needed.
//
// Verified against known feast-day equivalences: Sept 27 -> Meskerem 17
// (Meskel), Jan 7 -> Tahsas 29 (Genna), Jan 19 -> Tir 11 (Timkat).
//
// This diverges from the Gregorian calendar by a day in centuries where the
// two calendars' leap-year rules disagree (e.g. around 2100) — irrelevant
// for a present-day parish calendar.

export const ETHIOPIAN_MONTHS = [
  "Meskerem",
  "Tikimt",
  "Hidar",
  "Tahsas",
  "Tir",
  "Yekatit",
  "Megabit",
  "Miazia",
  "Ginbot",
  "Sene",
  "Hamle",
  "Nehase",
  "Pagume",
];

export type EthiopianDate = {
  year: number;
  month: number; // 1-13
  day: number;
};

const MS_PER_DAY = 86_400_000;

function isGregorianLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function newYearDate(gregorianYear: number): Date {
  const day = isGregorianLeapYear(gregorianYear + 1) ? 12 : 11;
  return new Date(gregorianYear, 8, day);
}

export function toEthiopian(date: Date): EthiopianDate {
  const input = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const gYear = input.getFullYear();
  const thisNewYear = newYearDate(gYear);

  const [ethYear, anchor] =
    input >= thisNewYear
      ? [gYear - 7, thisNewYear]
      : [gYear - 8, newYearDate(gYear - 1)];

  const diffDays = Math.round((input.getTime() - anchor.getTime()) / MS_PER_DAY);

  return {
    year: ethYear,
    month: Math.floor(diffDays / 30) + 1,
    day: (diffDays % 30) + 1,
  };
}

export function ethiopianMonthName(month: number): string {
  return ETHIOPIAN_MONTHS[month - 1] ?? "";
}

export function ethiopianMonthAbbr(month: number): string {
  return ethiopianMonthName(month).slice(0, 3);
}
