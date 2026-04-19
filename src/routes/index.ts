import { Router } from "express"

const router = Router()

router.get("/api/parking/check-in", (req, res)=>{
    res.send("fazendo check-in de vagas!")
})

export { router }