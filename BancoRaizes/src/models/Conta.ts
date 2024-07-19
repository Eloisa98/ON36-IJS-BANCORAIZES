export class Conta {
    protected saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            throw new Error("O valor do depósito deve ser positivo.");
        }
    }

    public sacar(valor: number): boolean {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }

    private calcularTaxa(): number {
        return this.saldo * 0.05; 
    }
}
