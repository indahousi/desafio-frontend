import * as dateFns from "date-fns";
import * as languages from "date-fns/locale";
import { formatToTimeZone } from "date-fns-timezone";

export * as languages from "date-fns/locale";

type Config = {
  days?: number;
  months?: number;
  years?: number;
};

type Languages = keyof typeof languages;

interface Options {
  locale: Languages;
}
export const create = (date: string | Date): Date => {
  return dateFns.parseISO(
    formatToTimeZone(date, "YYYY-MM-DD", { timeZone: "UTC" })
  );
};

export const sum = (date: Date, config: Config): Date => {
  return dateFns.add(date, config);
};

export const sub = (date: Date, config: Config): Date => {
  return dateFns.sub(date, config);
};

export const datesBetween = (start: Date, end: Date, config: Config) => {
  const dates: Date[] = [];
  let date = start;

  while (date <= end) {
    dates.push(date);
    date = sum(date, config);
  }

  return dates;
};

export const format = (
  date: string | Date,
  format: string,
  options?: Options
): string => {
  const formatToTz = create(date);

  const locale = options?.locale ? languages[options?.locale] : languages.ptBR;

  return dateFns.format(formatToTz, format, {
    locale,
  });
};

export const eachDaysOfMonth = (month: Date): Date[] => {
  const monthStart = dateFns.startOfMonth(month);
  const monthEnd = dateFns.endOfMonth(monthStart);

  const start = dateFns.startOfWeek(monthStart);
  const end = dateFns.endOfWeek(monthEnd);

  const dates = datesBetween(start, end, { days: 1 });

  return dates;
};

export const eachMonthsOfYear = (year: Date): Date[] => {
  const start = dateFns.startOfYear(year);
  const end = dateFns.endOfYear(start);

  const dates = datesBetween(start, end, { months: 1 });

  return dates;
};

const dateUtils = {
  sum,
  sub,
  format,
  create,
  datesBetween,
  eachDaysOfMonth,
  eachMonthsOfYear,
};

export default dateUtils;
