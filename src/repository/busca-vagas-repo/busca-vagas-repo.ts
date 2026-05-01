import { Database } from "sqlite";
import { IbuscaVagasRepository, vagas } from "../../controllers/busca-vagas/busca-vagas.controller";

export class BuscaVagasRepository implements IbuscaVagasRepository {
    constructor(private readonly db: Database){}

    async buscarVagas(): Promise<vagas[]> {
        return await this.db.all("SELECT * FROM vagas")
    }
}