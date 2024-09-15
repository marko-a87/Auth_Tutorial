import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//connect to database
connectDB();

//User routes
app.use("/", authRoutes);

//App listens for port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
