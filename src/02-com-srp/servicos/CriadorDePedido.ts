import { ItemPedido, Pedido } from "../entidades/Pedido";
import { CalculadoraDeTotal } from "./CalculadoraDeTotal";
import { AplicadorDeDesconto } from "./AplicadorDeDesconto";
import { PedidoRepositorio } from "../repositorios/PedidoRepositorio";
import { GeradorDeRecibo } from "./GeradorDeRecibo";
import { EnviadorDeEmail } from "./EnviadorDeEmail";

export class CriadorDePedido {
  constructor(
    private readonly calculadoraDeTotal: CalculadoraDeTotal,
    private readonly aplicadorDeDesconto: AplicadorDeDesconto,
    private readonly pedidoRepositorio: PedidoRepositorio,
    private readonly geradorDeRecibo: GeradorDeRecibo,
    private readonly enviadorDeEmail: EnviadorDeEmail
  ) {}

  executar(
    cliente: string,
    emailCliente: string,
    itens: ItemPedido[]
  ): Pedido {
    const total = this.calculadoraDeTotal.calcular(itens);
    const desconto = this.aplicadorDeDesconto.aplicar(total);
    const totalFinal = total - desconto;

    const pedido: Pedido = {
      cliente,
      emailCliente,
      itens,
      total,
      desconto,
      totalFinal,
    };

    this.pedidoRepositorio.salvar(pedido);
    this.geradorDeRecibo.gerar(pedido);
    this.enviadorDeEmail.enviarConfirmacao(pedido);

    return pedido;
  }
}

// Aqui o CriadorDePedido coordena o processo.

// Ele não sabe calcular total por conta própria.

//Ele não sabe aplicar desconto por conta própria.

// Ele não sabe salvar por conta própria.

// Ele apenas organiza o fluxo da criação do pedido