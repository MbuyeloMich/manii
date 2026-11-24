// Offline conversion rate snapshot from 5 October 2026.
const RUB_TO_ZAR = 0.196581;
const zarFormatter = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0,
});

export function formatZar(rubleAmount) {
  return zarFormatter.format(Number(rubleAmount) * RUB_TO_ZAR);
}
