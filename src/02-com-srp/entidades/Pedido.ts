export type ItemPedido = {
  nome: string;
  preco: number;
  quantidade: number;
};

export type Pedido = {
  cliente: string;
  emailCliente: string;
  itens: ItemPedido[];
  total: number;
  desconto: number;
  totalFinal: number;
};