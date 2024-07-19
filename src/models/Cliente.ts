import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";

export class Cliente extends Pessoa {
    private endereco: Endereco; 

    constructor(nome: string, email: string, telefone: string, cpf: string, endereco: Endereco) {
        super(nome, email, telefone, cpf);
        this.endereco = endereco; 
    }

    public getEndereco(): Endereco {
        return this.endereco;
    }

    public setEndereco(endereco: Endereco): void {
        this.endereco = endereco;
    }

    public toString(): string {
        return `${super.toString()}, Endereço: ${this.endereco.toString()}`;
    }
}
