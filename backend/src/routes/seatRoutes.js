import express from "express";
import { getAllSeat } from "../controllers/seatController.js";
import { bookSeat } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getAllSeat);
router.put("/book/:seatId", bookSeat);

export default router;