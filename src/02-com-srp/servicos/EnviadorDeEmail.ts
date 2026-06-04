import { Pedido } from "../entidades/Pedido";

export class EnviadorDeEmail {
  enviarConfirmacao(pedido: Pedido): void {
    console.log("\nEmail enviado:");
    console.log(`Para: ${pedido.emailCliente}`);
    console.log(`Mensagem: seu pedido foi criado com sucesso.`);
  }
}

// Responsabilidade única:

// enviar email de confirmação