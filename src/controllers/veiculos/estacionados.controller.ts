import { HttpResponse, ticket } from "../protocols";

export interface IveiculosEstacionadosController {
    estacionados(): Promise<HttpResponse<ticket[]>>
}

export class VeiculosEstacionadosController implements IveiculosEstacionadosController {
    constructor(){}
    async estacionados(): Promise<HttpResponse<ticket[]>> {
        try{
            throw new Error("")
        }catch(err){
            throw new Error("")
        }
    }
}