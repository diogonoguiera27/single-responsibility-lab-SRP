import { Pedido } from "../entidades/Pedido";

export class GeradorDeRecibo {
  gerar(pedido: Pedido): void {
    console.log("\nRecibo gerado:");
    console.log(`Cliente: ${pedido.cliente}`);
    console.log(`Total: R$ ${pedido.total}`);
    console.log(`Desconto: R$ ${pedido.desconto}`);
    console.log(`Total final: R$ ${pedido.totalFinal}`);
  }
}

// Responsabilidade única:

//gerar o recibo do pedido