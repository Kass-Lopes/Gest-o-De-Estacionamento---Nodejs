import { Database } from "sqlite";
import { vagas } from "../../controllers/protocols";

export interface IbuscaVagasDisponiveisRepository {
    buscaVagasDisponiveis(): Promise<vagas[]>
}
export class BuscaVagasDisponiveisRepository implements IbuscaVagasDisponiveisRepository {
    constructor(private readonly db: Database){}

    async buscaVagasDisponiveis(): Promise<vagas[]> {
        const vagas = await this.db.all("SELECT * FROM vagas WHERE status='LIVRE'")
        if(vagas.length === 0){
            throw new Error("Nenhuma vaga disponível")
        }
        return vagas
    }
}