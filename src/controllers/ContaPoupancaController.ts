import { ContaPoupanca } from '../models/ContaPoupanca';
import { IConta } from '../interfaces/IConta';

export class ContaPoupancaController {
    private conta: ContaPoupanca;

    constructor(conta: ContaPoupanca) {
        this.conta = conta;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.conta.depositar(valor);
            console.log(`Depositado R$${valor.toFixed(2)} na Conta Poupança.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    public sacar(valor: number): void {
        if (this.conta.sacar(valor)) {
            console.log(`Sacado R$${valor.toFixed(2)} da Conta Poupança.`);
        } else {
            console.log("Saque falhou: saldo insuficiente.");
        }
    }

    public aplicarJuros(): void {
        this.conta.aplicarJuros();
        console.log("Juros aplicados na Conta Poupança.");
    }

    public transferir(valor: number, contaDestino: IConta): void {
        this.conta.transferir(valor, contaDestino);
    }

    public mostrarSaldo(): void {
        console.log(this.conta.toString());
    }
}
