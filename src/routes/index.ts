import { Router } from "express"
import { BuscaVagasController } from "../controllers/busca-vagas/busca-vagas.controller"
import { BuscaVagasRepository } from "../repository/busca-vagas-repo/busca-vagas-repo"
import { conectarDB, criarTabelas } from "../config/sqlite"

const router = Router()

const main =  async ()=>{
    
    const db = await conectarDB()
    await criarTabelas(db)

    router.get("/api/vagas", async (req, res)=>{
        
        const buscaVagaDB = new BuscaVagasRepository(db)
        const buscaVaga = new BuscaVagasController(buscaVagaDB)
    
        const {status, data} = await buscaVaga.handle()
        res.send({status,data})
    })
}

export { router, main }