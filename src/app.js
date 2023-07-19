import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./router"
dotenv.config()

const app = express()

app.use(express.json())

app.use("/api", router)

mongoose.connect('mongodb://127.0.0.1:27017/ASM-1').then(()=>{
  console.log("Database conected");
})

app.listen(1811, () => {
  console.log(`Server is running on 1811`)
})