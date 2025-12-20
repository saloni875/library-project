import { useEffect, useState } from "react";
import axios from "axios";


export default function UserSeatsLayout() {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/seats")
      .then(res => setSeats(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    
  }, [selectedSeat]);

  function handleSeatClick(seat) {
    console.log("seat clicked", seat.seatNumber, seat.isOccupied, seat.paymentStatus, seat.currentMember);

    if (!seat.isOccupied && seat.currentMember === null) {
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
                : seat.currentMember
                ? "pending"
                : "empty"
            }`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.seatNumber}
          </div>
        ))}
      </div>

      {selectedSeat && (
        <div style={{
          position: "fixed",
          top: "20%",
          left: "40%",
          background: "white",
          padding: "20px",
          zIndex: 9999
        }}>
          <h3>Seat {selectedSeat.seatNumber}</h3>
          <button onClick={() => setSelectedSeat(null)}>Close</button>
        </div>
      )}
    </>
  );
}