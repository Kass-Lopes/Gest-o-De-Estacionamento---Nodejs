import express from "express"
import { config } from "dotenv"
import { router } from "./routes"
 
config()

const app = express()
const port = process.env.PORT || "8082"
app.use(express.json())
app.use(router)


// app.get("/", (req, res)=>{
//     res.json("servidor pronto!")
// })

app.listen(port, ()=> {
    console.log("Servidor rodando em http://localhost:"+port)
})