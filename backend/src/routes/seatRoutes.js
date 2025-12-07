import express from "express";
import { getAllSeat, resetSeats,bookSeat, getSeatById } from "../controllers/seatController.js";
// import { bookSeat } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getAllSeat);
router.post("/reset", resetSeats);
router.post("/book/:seatId", bookSeat);
router.get("/", getSeatById);


export default router;