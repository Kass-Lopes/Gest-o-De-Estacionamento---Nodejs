import { vagas } from "../protocols";

export interface IbuscaVagaPorId {
    buscaVagaPorId(): Promise<vagas>
}

class BuscaVagaPorIdController implements IbuscaVagaPorId {
    constructor(){}
    buscaVagaPorId(): Promise<vagas> {
        throw new Error("Method not implemented.");
    }

}