import {Router} from "express"
import { adminLogin, complaints, getAllDb } from "../controllers/complaints.controller.js"
import { errorHandler } from "../middlewares/errorHandler.js"
import { adminAut } from "../middlewares/requireAdminAuth.js"

const router = Router()

router.post("/complaints",errorHandler,complaints)

router.post("/admin/login",adminLogin)

router.get("/complaints",adminAut, getAllDb)

export default router