import {Router} from "express"
import roomController from "../controller/RoomController";

const router = Router()

router.get("/generateCode/:userId",roomController.generateCode)

router.post("/joinRoom",roomController.joinRoom)

router.post("/leaveRoom",roomController.leaveRoom)

export default router