import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";

export class Funcionario extends Pessoa {
    private cargo: string;
    protected salario: number; 
    private endereco: Endereco;

    constructor(nome: string, email: string, telefone: string, cpf: string, endereco: Endereco, cargo: string, salario: number) {
        super(nome, email, telefone, cpf);
        this.endereco = endereco;
        this.cargo = cargo;
        this.salario = salario;
    }

    public getEndereco(): Endereco {
        return this.endereco;
    }

    public setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }

    public getCargo(): string {
        return this.cargo;
    }

    public setCargo(cargo: string): void {
        this.cargo = cargo;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public toString(): string {
        return `${super.toString()}, Cargo: ${this.cargo}, Salário: ${this.salario.toFixed(2)}, Endereço: ${this.endereco.toString()}`;
    }
}
