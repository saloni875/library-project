import Seat from "../models/Seat.js";

export const getAllSeat = async(req, res) =>{
    try{
        const seats = await Seat.find().sort({seatNumber : 1});
        res.json(seats);
    } catch (err){
        res.status(500).json({error : `Fail to fetch the seat ${err}`});
    }
};

export const resetSeats = async (req, res) => {
  try {
    await Seat.updateMany({}, {
      isOccupied: false,
      currentMember: null,
      paymentStatus: "pending",
      expiryDate: null
    });

    res.json({ message: "All seats reset to empty" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};