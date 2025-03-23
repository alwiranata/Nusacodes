import express from "express"
import cors from "cors"
import Categorie from "./routes/Categorie.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(Categorie)

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
