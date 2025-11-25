import mongoose from "mongoose";
import dotenv from "dotenv";
import Seat from "../models/Seat.js";

dotenv.config();

const createSeats = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected", mongoose.connection.name);

    const totalSeats = 66;  //  library has 66 seats

    // array of seat objects
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      // seats.push({ seatNumber: i, isOccupied: false });
      if(i=== 17){
        seats.push({
          seatNumber: 17,
          isOccupied: true,
          currentMember : "Saloni singh",
          PaymentStatus: "pending"
        });
      } else if (i===18){
        seats.push({
          seatNumber: 18,
          isOccupied: true,
          currentMember : "Amita singh",
          PaymentStatus: "paid"
        });
      } else{
        seats.push({
          seatNumber: i,
          isOccupied: false,
          currentMember : null,
          PaymentStatus: "pending"
        });
      }
    }

    // Remove old seats if any
    await Seat.deleteMany({});
    await Seat.insertMany(seats);

    console.log(`Successfully created ${totalSeats} seats!`);
    process.exit(0);
  } catch (err) {
    console.log("Error:", err);
    process.exit(1);
  }
};

createSeats();
