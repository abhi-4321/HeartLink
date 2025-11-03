import {Router} from "express"

import userController from "../controller/UserController";
import multer from "../util/multer";

const router = Router()

router.post("/createUser", userController.createUser)

router.post("/createProfile", multer.single('image'), userController.createProfile)

router.get("/profile/:id", userController.getUserDetailsById)

router.post("/verifyUsername/:username", userController.verifyUsername)

export default router
