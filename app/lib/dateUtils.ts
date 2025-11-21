export function getCurrentWeekString(locale: string = "ro-RO"): string {
  const today = new Date();
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - today.getDay() + 1);
  const lastDayOfWeek = new Date(today);
  lastDayOfWeek.setDate(today.getDate() - today.getDay() + 7);
  const format = (d: Date) =>
    d.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  return `${format(firstDayOfWeek)} - ${format(lastDayOfWeek)}`;
}