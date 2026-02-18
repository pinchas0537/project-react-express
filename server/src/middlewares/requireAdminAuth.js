import jwt from "jsonwebtoken"
import {config} from "dotenv"
config()

export function adminAut(req,res,next){
    const token = req.headers.authorization
    const tokenVerify = jwt.verify(token,process.env.SECRET_JWT)
    if(tokenVerify.role !== "admin") return res.status(401).json({message:"No access permission"})
    next()
}