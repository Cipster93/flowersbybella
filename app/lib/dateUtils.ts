export function getCurrentWeekString(locale: string = "ro-RO"): string {
  const today = new Date();
  const day = today.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;
  const diffToSunday = day === 0 ? 0 : 7 - day;
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() + diffToMonday);
  const lastDayOfWeek = new Date(today);
  lastDayOfWeek.setDate(today.getDate() + diffToSunday);
  const format = (d: Date) =>
    d.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  return `${format(firstDayOfWeek)} - ${format(lastDayOfWeek)}`;
}