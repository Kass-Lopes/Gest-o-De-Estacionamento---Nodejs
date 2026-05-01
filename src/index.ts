import express from "express"
import { config } from "dotenv"
import { main, router } from "./routes"
 
config()
main()
const app = express()
const port = process.env.PORT || "8082"
app.use(express.json())
app.use(router)

app.listen(port, ()=> {
    console.log("Servidor rodando em http://localhost:"+port)
})