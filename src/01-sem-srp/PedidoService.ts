type ItemPedido = {
  nome: string;
  preco: number;
  quantidade: number;
};

type Pedido = {
  cliente: string;
  emailCliente: string;
  itens: ItemPedido[];
  total: number;
  desconto: number;
  totalFinal: number;
};

export class PedidoService {
  criarPedido(
    cliente: string,
    emailCliente: string,
    itens: ItemPedido[]
  ): Pedido {
    const total = this.calcularTotal(itens);
    const desconto = this.aplicarDesconto(total);
    const totalFinal = total - desconto;

    const pedido: Pedido = {
      cliente,
      emailCliente,
      itens,
      total,
      desconto,
      totalFinal,
    };

    this.salvarPedido(pedido);
    this.gerarRecibo(pedido);
    this.enviarEmailConfirmacao(pedido);

    return pedido;
  }

  private calcularTotal(itens: ItemPedido[]): number {
    return itens.reduce((total, item) => {
      return total + item.preco * item.quantidade;
    }, 0);
  }

  private aplicarDesconto(total: number): number {
    if (total >= 500) {
      return total * 0.1;
    }

    return 0;
  }

  private salvarPedido(pedido: Pedido): void {
    console.log("Pedido salvo no banco de dados fake:");
    console.log(pedido);
  }

  private gerarRecibo(pedido: Pedido): void {
    console.log("\nRecibo gerado:");
    console.log(`Cliente: ${pedido.cliente}`);
    console.log(`Total: R$ ${pedido.total}`);
    console.log(`Desconto: R$ ${pedido.desconto}`);
    console.log(`Total final: R$ ${pedido.totalFinal}`);
  }

  private enviarEmailConfirmacao(pedido: Pedido): void {
    console.log("\nEmail enviado:");
    console.log(`Para: ${pedido.emailCliente}`);
    console.log(`Mensagem: seu pedido foi criado com sucesso.`);
  }
}

// Por que esse código fere SRP?

// A classe PedidoService tem responsabilidades demais.

// Ela muda se:

// mudar a regra de criação do pedido
// mudar o cálculo do total
// mudar a regra de desconto
// mudar a forma de salvar
// mudar o formato do recibo
// mudar a forma de enviar email