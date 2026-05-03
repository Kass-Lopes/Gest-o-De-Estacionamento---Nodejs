import { Database } from "sqlite";
import { ticket } from "../../controllers/protocols";

export interface IentradaDeVeiculoRepository {
    entrada(placa: string): Promise<ticket>,
}

export class EntradaDeVeiculoRepository implements IentradaDeVeiculoRepository {
    constructor(private readonly db: Database){}

    //const vagas = await this.db.all("SELECT * FROM vagas")
    async entrada(): Promise<ticket> {
        throw new Error("erro")
    }
    
}