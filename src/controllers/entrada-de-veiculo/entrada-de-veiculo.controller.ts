import { IentradaDeVeiculoRepository } from "../../repository/entrada-de-veiculo-repo/entrada-de-veiculo-repo";
import { HttpResponse, ticket } from "../protocols";

export interface IentradaDeVeiculo {
    entrada(): Promise<HttpResponse<ticket>>
}

export class EntredaDeVeiculoController implements IentradaDeVeiculo {
    constructor(private readonly EntradaDeVeiculo: IentradaDeVeiculoRepository, private readonly placa: string ){}

    async entrada(): Promise<HttpResponse<ticket>> {
        
        try{
            const NovaPlaca = this.placa.split(/[-\s]/)
            const data = await this.EntradaDeVeiculo.entrada(NovaPlaca.join(""))
            return {
                status: 200,
                data: data
            }
        }catch{
            return {
                status: 500,
                data: "Erro ao dar  entrada, por favor tente novamente mais tarde!"
            }
        }
    }
}