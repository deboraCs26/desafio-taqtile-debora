export function FormatPrice(price: number): string {
  const formatted = (price / 100).toFixed(2);

  return `R$ ${formatted}`;
}
