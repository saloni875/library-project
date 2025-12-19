

import { useEffect, useState } from "react";
import axios from "axios";
import SeatDetailsCard from "../components/SeatDetailsCard";

export default function UserSeatsLayout() {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/seats")
      .then(res => setSeats(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleSeatClick(seat) {
    if (!seat.isOccupied && seat.paymentStatus !== "pending") {
      setSelectedSeat(seat);
    }
  }

  return (
    <>
      <div className="seat-grid">
        {seats.map(seat => (
          <div
            key={seat._id}
            className={`seat-box ${
              seat.isOccupied 
              ? "occupied" 
              : seat.paymentStatus === "pending"
              ?"pending"
              :"empty"
            }`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>

      {selectedSeat && (
        <SeatDetailsCard
          seat={selectedSeat}
          onClose={() => setSelectedSeat(null)}
        />
      )}
    </>
  );
}

