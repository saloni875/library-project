import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/home", (req, res) => {
  res.json({ msg: "ok" });
});

// connect DB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
