import jwt from "jsonwebtoken"
import { config } from "dotenv"
import { addToFile } from '../db/connect.js'
config()
export async function complaints(req, res) {
    const { category, message } = req.body
    const obj = {
        category,
        message,
        createedAt: new Date().toISOString()
    }
    await addToFile(obj)
    res.send("sucress")
}

export function adminLogin(req, res) {
    const { password } = req.body
    if (password === process.env.ADMIN) {
        const token = jwt.sign({password},process.env.SECRET_JWT,{expiresIn:'1h'})
        return res.json({ message: "Verification successful" ,token})
    }else{
        return res.stats(400).json({message:"Verification successful"})
    }
}