import jwt from "jsonwebtoken"
import { config } from "dotenv"
import { addToFile, readfile } from '../db/connect.js'
config()
export async function complaints(req, res) {
    const { category, message } = req.body
    const obj = {
        category,
        message,
        createedAt: new Date().toISOString()
    }
    await addToFile(obj)
    return res.json({ message:"sucress" })
}

export function adminLogin(req, res) {
    const { password } = req.body
    if (password === process.env.ADMIN) {
        const token = jwt.sign({role:"admin"},process.env.SECRET_JWT,{expiresIn:'1h'})
        return res.setHeader("Authorization",token).json({ message: "Verification successful"})
    }else{
        return res.stats(401).json({message:"Unauthorized"})
    }
}

export async function getAllDb(req,res){
    const file =  await readfile()
    // const newFile = file.sort((a,b)=>b.createedAt - a.createedAt)
    res.send(file)
}