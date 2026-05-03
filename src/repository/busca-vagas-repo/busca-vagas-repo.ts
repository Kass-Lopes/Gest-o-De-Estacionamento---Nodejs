import { Database } from "sqlite";
import { IbuscaVagasRepository } from "../../controllers/busca-vagas/busca-vagas.controller";
import { vagas } from "../../controllers/protocols";

export class BuscaVagasRepository implements IbuscaVagasRepository {
    constructor(private readonly db: Database){}

    async buscarVagas(): Promise<vagas[]> {
        return await this.db.all("SELECT * FROM vagas")
    }
}