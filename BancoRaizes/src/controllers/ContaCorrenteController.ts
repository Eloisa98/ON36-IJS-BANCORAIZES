import { ContaCorrente } from '../models/ContaCorrente';
import { IConta } from '../interfaces/IConta';

export class ContaCorrenteController {
    private conta: ContaCorrente;

    constructor(conta: ContaCorrente) {
        this.conta = conta;
    }

    public depositar(valor: number): void {
        try {
            this.conta.depositar(valor);
            console.log(`Depositado R$${valor.toFixed(2)} na Conta Corrente.`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Erro ao depositar: ${error.message}`);
            } else {
                console.error("Erro desconhecido ao depositar.");
            }
        }
    }

    public sacar(valor: number): void {
        if (this.conta.sacar(valor)) {
            console.log(`Sacado R$${valor.toFixed(2)} da Conta Corrente.`);
        } else {
            console.log("Saque falhou: saldo insuficiente.");
        }
    }

    public transferir(valor: number, contaDestino: IConta): void {
        this.conta.transferir(valor, contaDestino);
    }

    public mostrarSaldo(): void {
        console.log(this.conta.toString());
    }
}
