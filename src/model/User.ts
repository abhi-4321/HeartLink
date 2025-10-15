import mongoose, { Schema, Document } from "mongoose"

export interface User extends Document {
  id: number
  email: string
  username: string
  password: string
  profileImageUrl: string
  postsCount: string
  followersCount: string
  followingCount: string
  fullName: string
  bio: string
  private: boolean
}

const userSchema = new Schema<User>({
  id: { type: Number, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profileImageUrl: { type : String, default: "" },
  postsCount: { type: String, default: "" },
  followersCount: { type: String, default: "" },
  followingCount: { type: String, default: "" },
  fullName: { type: String, default: "" },
  bio: { type: String, default: "" },
  private: { type: Boolean, default: false }
})

userSchema.index({ username: "text", fullName: "text" })

export const User = mongoose.model<User>("User", userSchema, "users")
