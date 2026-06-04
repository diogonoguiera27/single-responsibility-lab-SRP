import { ItemPedido } from "../entidades/Pedido";

export class CalculadoraDeTotal {
  calcular(itens: ItemPedido[]): number {
    return itens.reduce((total, item) => {
      return total + item.preco * item.quantidade;
    }, 0);
  }
}

// Responsabilidade única:

//calcular o total dos itens