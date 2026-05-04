import { Database } from "sqlite";
import { ticket } from "../../controllers/protocols";

export interface IentradaDeVeiculoRepository {
    entrada(placa: string): Promise<ticket>,
}

export class EntradaDeVeiculoRepository implements IentradaDeVeiculoRepository {
    constructor(private readonly db: Database){}

    async entrada(placa: string): Promise<ticket> {

        try{
            const resultado = await this.db.all("SELECT id FROM vagas WHERE status='LIVRE' LIMIT 1")
            const vaga_id = resultado[0].id

            if(resultado.length === 0){
                throw Error("Estacionamento Lotado!")
            }
            
            await this.db.run("INSERT INTO tickets(placa, vaga_id, id, hora_entrada) VALUES(?, ?, ?, datetime('now', 'localtime'))", [placa, vaga_id, vaga_id])
            await this.db.run("UPDATE vagas SET status = 'OCUPADO' WHERE id=?", [vaga_id])
            const tickets = await this.db.all("SELECT * FROM tickets WHERE vaga_id=?",[vaga_id])

            return {
                id: tickets[0].id,
                placa: tickets[0].placa,
                vagaOcupada: tickets[0].vaga_id,
                hora_de_entrada: tickets[0].hora_entrada
            }
        }catch{
            throw Error("erro!")
        }
    }
    
}