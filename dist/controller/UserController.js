"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
// Image Name Generator
const randomImageName = () => crypto_1.default.randomBytes(32).toString('hex');
const bucketName = process.env.BUCKET_NAME || 'myBucketName';
/*const updateUserDetails = async (req: Request, res: Response) => {
    try {
        // Proceed with user creation
        const userId = req.userId
        const body = req.body

        const existingUser = await User.findOne({id: userId})
        if (!existingUser) {
            res.status(404).json({message: "User not found"})
            return
        }

        const isFirstUpdate = !existingUser.fullName || !existingUser.bio
        if (isFirstUpdate && (!body.fullName || !body.bio)) {
            res.status(400).json({message: "Full name and bio are required for the first update"})
            return
        }

        if (body.username) {
            const usernameExists = await User.findOne({username: body.username, id: {$ne: userId}});
            if (usernameExists) {
                res.status(400).json({message: "Username already exists"})
                return
            }
        }

        const savedUser = await User.findOneAndUpdate({id: userId}, {$set: body}, {new: true})

        // Respond with the newly created user
        res.status(201).json(savedUser)
    } catch (error: any) {
        res.status(500).json({error: "Failed to create user", details: error.message})
    }
}*/
exports.default = {};
