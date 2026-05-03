import { Router } from "express"
import { BuscaVagasController } from "../controllers/busca-vagas/busca-vagas.controller"
import { BuscaVagasRepository } from "../repository/busca-vagas-repo/busca-vagas-repo"
import { conectarDB, criarTabelas } from "../config/sqlite"
import { EntradaDeVeiculoRepository } from "../repository/entrada-de-veiculo-repo/entrada-de-veiculo-repo"
import { EntredaDeVeiculoController } from "../controllers/entrada-de-veiculo/entrada-de-veiculo.controller"

const router = Router()

const main =  async ()=>{
    
    const db = await conectarDB()
    await criarTabelas(db)

    router.get("/api/vagas", async (_, res)=>{
        
        const buscaVagaDB = new BuscaVagasRepository(db)
        const buscaVaga = new BuscaVagasController(buscaVagaDB)

        const {status, data} = await buscaVaga.handle()
        res.status(status).json({status,data})
    })

    router.post("/api/check-in/:placa", async (req, res)=>{
        const placa = req.params.placa
        const entradaDB = new EntradaDeVeiculoRepository(db)
        const entradaController = new EntredaDeVeiculoController(entradaDB, placa)

        const { status, data } = await entradaController.entrada()
        res.status(status).json({status,data})
    })
}

export { router, main }