import {Router} from "express"
import roomController from "../controller/RoomController";

const router = Router()

router.get("/generateCode",roomController.generateCode)

router.post("/leaveRoom",roomController.leaveRoom)

export default router