import Seat from "../models/Seat.js";

export const getAllSeat = async (req, res) => {
  try {
    const seats = await Seat.find().sort({ seatNumber: 1 });
    res.json(seats);
  } catch (err) {
    res.status(500).json({ error: `Fail to fetch the seat ${err}` });
  }
};

export const resetSeats = async (req, res) => {
  try {
    await Seat.updateMany({}, {
      isOccupied: false,
      currentMember: null,
      userDetails: null,
      paymentStatus: "pending",
      expiryDate: null
    });

    res.json({ message: "All seats reset to empty" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const bookSeat = async (req, res) => {
  try {
    const seatId = req.params.seatId;
    const { userId, name, email, phone, aadhaar } = req.body;

    if (!userId) {
      return res.status(400).json({ msg: "User ID missing" });
    }

    const seat = await Seat.findById(seatId);
    if (!seat) return res.status(404).json({ msg: "Seat not found" });

    if (seat.isOccupied)
      return res.status(400).json({ msg: "Seat already occupied" });

    seat.isOccupied = true;
    seat.currentMember = userId;
    seat.userDetails = { name, email, phone, aadhaar };
    seat.paymentStatus = "pending";
    seat.expiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    await seat.save();

    res.json({ msg: "Seat booked successfully", seat });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findById(req.params.id);
    if (!seat) return res.status(404).json({ msg: "Seat not found" });
    res.json(seat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};