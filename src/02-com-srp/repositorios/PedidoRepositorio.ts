import { Pedido } from "../entidades/Pedido";

export class PedidoRepositorio {
  salvar(pedido: Pedido): void {
    console.log("Pedido salvo no banco de dados fake:");
    console.log(pedido);
  }
}
// Responsabilidade única:

 //salvar o pedido