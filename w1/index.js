import express from "express"
import cors from "cors"
import Profile from "./routes/Profile.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(Profile);

app.listen(3000, () =>{
    console.log("Server is Runnign on localhost:3000")
})