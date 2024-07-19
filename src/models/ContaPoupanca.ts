import { IConta } from '../interfaces/IConta';

export class ContaPoupanca implements IConta {
    public saldo: number;
    private taxaJuros: number;

    constructor( saldo: number = 0, taxaJuros: number) {
        this.saldo = saldo;
        this.taxaJuros = taxaJuros;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true; 
        }
        return false; 
    }

    public aplicarJuros(): void {
        this.saldo += this.saldo * this.taxaJuros;
    }

    public transferir(valor: number, contaDestino: IConta): void {
        if (this.sacar(valor)) { 
            contaDestino.depositar(valor); 
        } else {
            console.log("Transferência falhou: saldo insuficiente.");
        }
    }

    public toString(): string {
        return `Conta Poupança saldo: R$${this.saldo.toFixed(2)}, Taxa de Juros: ${(this.taxaJuros * 100).toFixed(2)}%`;
    }
}
