import { Database } from "sqlite";
import { vagas } from "../../controllers/protocols";

export interface IbuscaVagaPorIdRepository {
    buscaVagaPorId(): Promise<vagas>
}

class BuscaVagaPorIdRepository implements IbuscaVagaPorIdRepository {
    constructor( 
        private readonly db: Database,
        private readonly id_vaga: number
    ){}
    async buscaVagaPorId(): Promise<vagas> {
        const vaga = await this.db.all("SELECT * FROM vagas WHERE id=?",[this.id_vaga])
        return vaga[0]
    }

}