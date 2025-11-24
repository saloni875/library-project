import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import seatRoutes from "./routes/seatRoutes.js";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/home", (req, res) => {
  res.json({ msg: "ok" });
});

// seat route 
app.use("api/seats", seatRoutes);

// Attach Routes
app.use("/api/seats", seatRoutes);

// error and 404 handler
app.use((req, res) => {
  res.status(404).json({message : "page not found"});
});

app.use((err, req, res, next) =>{
  console.error(err.stack);
  res.status(500).json( {error : err.message});
});


// connect DB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
