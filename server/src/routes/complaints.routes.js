import {Router} from "express"
import { adminLogin, complaints } from "../controllers/complaints.controller.js"
import { errorHandler } from "../middlewares/errorHandler.js"

const router = Router()

router.post("/complaints",errorHandler,complaints)

router.post("/admin/login",adminLogin)

export default router