import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    coins: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const userModel = mongoose.model("User", userSchema);
