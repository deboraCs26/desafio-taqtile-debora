export function FormatPrice(price: number): string {
  const formatted = (price / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatted;
}
