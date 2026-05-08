import { IbuscaVagasDisponiveisRepository } from "../../repository/busca-vagas-repo/busca-vagas-disponiveis-repo";
import { HttpResponse, vagas } from "../protocols";

export interface IbuscaVagasDisponiveisController {
    vagasDisponiveis(): Promise<HttpResponse<vagas[]>>
}

export class BuscaVagasDisponiveisController implements IbuscaVagasDisponiveisController {
    constructor(
        private readonly buscaVagasDisponiveis: IbuscaVagasDisponiveisRepository
    ){}

    async vagasDisponiveis(): Promise<HttpResponse<vagas[]>> {
        try{
            const data = await this.buscaVagasDisponiveis.buscaVagasDisponiveis()
            return {
                status: 200,
                data: data
            }
        }catch(err){
            return {
                status: 500,
                data: err+""
            }
        }
    }

}