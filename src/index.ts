import express from "express"

const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    res.json("Duto pronto!")
})

app.listen("8000", ()=> {console.log("All Ok")})