import { IConta } from '../interfaces/IConta';

export class ContaCorrente implements IConta {
    saldo: number;
    private limiteChequeEspecial: number;

    constructor(saldo: number = 0, limiteChequeEspecial: number) {
        this.saldo = saldo;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): boolean {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
            return true; 
        }
        return false; 
    }

    public transferir(valor: number, contaDestino: IConta): void {
        if (this.sacar(valor)) { 
            contaDestino.depositar(valor); 
        } else {
            console.log("Transferência falhou: saldo insuficiente.");
        }
    }

    public toString(): string {
        return `Conta Corrente saldo: R$${this.saldo.toFixed(2)}, Limite Cheque Especial: R$${this.limiteChequeEspecial.toFixed(2)}`;
    }
}
