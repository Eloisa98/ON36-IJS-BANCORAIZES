export interface IConta {
    saldo: number;           

    depositar(valor: number): void; 
    transferir(valor: number, contaDestino: IConta): void
    sacar(valor: number): boolean;   
    toString(): string;      
}
