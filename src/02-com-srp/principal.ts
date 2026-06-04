import { CalculadoraDeTotal } from "./servicos/CalculadoraDeTotal";
import { AplicadorDeDesconto } from "./servicos/AplicadorDeDesconto";
import { PedidoRepositorio } from "./repositorios/PedidoRepositorio";
import { GeradorDeRecibo } from "./servicos/GeradorDeRecibo";
import { EnviadorDeEmail } from "./servicos/EnviadorDeEmail";
import { CriadorDePedido } from "./servicos/CriadorDePedido";

const calculadoraDeTotal = new CalculadoraDeTotal();
const aplicadorDeDesconto = new AplicadorDeDesconto();
const pedidoRepositorio = new PedidoRepositorio();
const geradorDeRecibo = new GeradorDeRecibo();
const enviadorDeEmail = new EnviadorDeEmail();

const criadorDePedido = new CriadorDePedido(
  calculadoraDeTotal,
  aplicadorDeDesconto,
  pedidoRepositorio,
  geradorDeRecibo,
  enviadorDeEmail
);

criadorDePedido.executar(
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