import Seat from "../models/Seat.js";

export const bookSeat = async (req, res) => {
    try {

        const { seatId } = req.params;

        const seat = await Seat.findById(seatId);

        if (!seat) {
            return res.status(404).json({ error: "Seat not found" });
        }

        if (seat.isOccupied) {
            return res.status(400).json({ error: "Seat already booked" });
        }

        // For now, assign dummy user
        seat.isOccupied = true;
        seat.currentMember = "TEMP_USER";
        seat.expiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // +30 days

        await seat.save();

        res.json({ message: "Seat booked successfully", seat });

    } catch (err) {
        res.status(500).json({ error: `Booking failed: ${err}` });
    }
};