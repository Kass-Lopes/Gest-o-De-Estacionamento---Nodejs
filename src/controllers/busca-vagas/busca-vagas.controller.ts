import { HttpResponse } from "../protocols";

export interface IbuscaVagas {
    handle(): Promise<HttpResponse<vagas[]>>;
}

export interface IbuscaVagasRepository{
    buscarVagas(): Promise<vagas[]>
}
export interface vagas{
    id: number,
    status: string
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
                data: "algo deu errado"
            }
        }
    }
}