import express from "express";
import { getAllSeat, resetSeats } from "../controllers/seatController.js";
import { bookSeat } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getAllSeat);
router.post("/reset", resetSeats);
router.put("/book/:id", bookSeat);
router.put("/book/:seatId", bookSeat);

export default router;