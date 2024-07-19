export class Pessoa {
    private nome: string;
    private email: string;
    private telefone: string;
    private cpf: string;

    constructor(nome: string, email: string, telefone: string, cpf: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
    }
 
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone; 
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public toString(): string {
        return `Nome: ${this.nome}, Email: ${this.email}, Telefone: ${this.telefone}, CPF: ${this.cpf}`;
    }
}
