import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;
export const database = () => {
  if (DATABASE_URL === undefined) return;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.error(error);

      console.error(`Error connecting to database, error: ${error.message}`);
    });
};
