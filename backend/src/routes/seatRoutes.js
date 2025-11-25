import express from "express";
import { getAllSeat, resetSeats } from "../controllers/seatController.js";
import { bookSeat } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getAllSeat);
router.put("/book/:seatId", bookSeat);
router.post("/reset", resetSeats);

export default router;