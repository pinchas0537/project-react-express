import express from "express"
import cors from "cors"
import {config} from "dotenv"
import router from "./routes/complaints.routes.js"
config()

const app = express()

const port = process.env.PORT


app.use(express.json())

app.use(cors())

app.use("/api",router)

app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`)
})