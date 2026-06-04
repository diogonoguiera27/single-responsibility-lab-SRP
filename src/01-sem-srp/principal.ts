import { PedidoService } from "./PedidoService";

const pedidoService = new PedidoService();

pedidoService.criarPedido(
  "José Tayllan",
  "cliente@email.com",
  [
    {
      nome: "Anel de prata",
      preco: 200,
      quantidade: 2,
    },
    {
      nome: "Cordão de prata",
      preco: 150,
      quantidade: 1,
    },
  ]
);