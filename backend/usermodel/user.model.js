import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastaccess: {
      type: Date,
      default: Date.now,
    },
    verfied: {
      type: Boolean,
      default: false,
    },
    resetpasswordtoken: String,
    resetpasswordexpires: Date,
    verificariontoken: String,
    verificationexpires: Date,
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
