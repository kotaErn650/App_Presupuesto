export class FormatCop {
  formatCurrency(value: number): string {
    return value.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
    });
  }
}

