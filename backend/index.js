import express from "express";
import dotenv from "dotenv"; 
import authroutes from "./routes/authroutes.js";

import { connectDatabase } from "./database/connectDB.js";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  
  res.send("Jai Shri raam");
});
app.use("/api/auth",authroutes)
app.listen(3000, () => {
  connectDatabase();
  console.log("Server is running on port 3000");
});

//ohHaSIsm9FEDMoyP