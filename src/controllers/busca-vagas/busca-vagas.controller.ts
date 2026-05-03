import { HttpResponse, vagas } from "../protocols";

export interface IbuscaVagas {
    handle(): Promise<HttpResponse<vagas[]>>;
}

export interface IbuscaVagasRepository{
    buscarVagas(): Promise<vagas[]>
}

export class BuscaVagasController implements IbuscaVagas {
    
    constructor(private readonly buscaVagaDB: IbuscaVagasRepository){}

    async handle(): Promise<HttpResponse<vagas[]>> {
        try{
            const data = await this.buscaVagaDB.buscarVagas()
            return{
                status: 200,
                data: data
            }
        }catch{
            return {
                status: 500,
                data: "Erro ao buscar vagas"
            }
        }
    }
}