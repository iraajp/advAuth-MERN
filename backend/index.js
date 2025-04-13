import express from "express";
import dotenv from "dotenv"; 
import authroutes from "./routes/authroutes.js";

import { connectDatabase } from "./database/connectDB.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  
  res.send("Jai Shri raam");
});
app.use(express.json());
app.use("/api/auth",authroutes)
app.listen(port, () => {
  connectDatabase();
  console.log("Server is running on port ",port);
});

//ohHaSIsm9FEDMoyP