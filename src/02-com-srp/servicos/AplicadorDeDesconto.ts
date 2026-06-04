export class AplicadorDeDesconto {
  aplicar(total: number): number {
    if (total >= 500) {
      return total * 0.1;
    }

    return 0;
  }
}

