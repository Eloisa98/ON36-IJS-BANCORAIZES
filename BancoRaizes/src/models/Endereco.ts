export class Endereco {
    private rua: string;
    private cep: string;
    private numero: string;
    private complemento: string;
    private bairro: string;
    private cidade: string;
    private estado: string;

    constructor(rua: string, cep: string, numero: string, complemento: string, bairro: string, cidade: string, estado: string) {
        this.rua = rua;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    public getRua(): string {
        return this.rua;
    }

    public setRua(rua: string): void {
        this.rua = rua;
    }

    public getCep(): string {
        return this.cep;
    }

    public setCep(cep: string): void {
        this.cep = cep;
    }

    public getNumero(): string {
        return this.numero;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    public getComplemento(): string {
        return this.complemento;
    }

    public setComplemento(complemento: string): void {
        this.complemento = complemento;
    }

    public getBairro(): string {
        return this.bairro;
    }

    public setBairro(bairro: string): void {
        this.bairro = bairro;
    }

    public getCidade(): string {
        return this.cidade;
    }

    public setCidade(cidade: string): void {
        this.cidade = cidade;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public toString(): string {
        return `Rua: ${this.rua}, Número: ${this.numero}, Complemento: ${this.complemento}, Bairro: ${this.bairro}, Cidade: ${this.cidade}, Estado: ${this.estado}, CEP: ${this.cep}`;
    }
}
