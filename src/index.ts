import express from "express"
import { config } from "dotenv"

config()

const app = express()
const port = process.env.PORT || "8082"
app.use(express.json())

app.get("/", (req, res)=>{
    res.json("Duto pronto!")
})

app.listen(port, ()=> {
    console.log("All Ok")
})