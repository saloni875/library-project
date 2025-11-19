import express from "express";
import { getAllSeat } from "../controllers/seatController.js";

const router = express.Router();

router.get("/", getAllSeat);

export default router;