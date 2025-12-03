import React from "react";
import { useNavigate } from "react-router-dom";

export default function SeatDetailsCard({ seat, onClose }) {
  const navigate = useNavigate();

  const handleBook = () => {
    // If not logged in → redirect to login
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // If logged in → open booking form
    navigate(`/book-seats/${seat._id}`);
  };

  return (
    <div className="seat-card-overlay  ">
      <div className="seat-card card-body card" style={{width: "18rem"}}>
        <h3>Seat Number: {seat.seatNumber}</h3>
        <p>Status: Free</p>

        <button onClick={handleBook} className="btn btn-success ">
          Book This Seat
        </button>

        <button onClick={onClose} className="btn btn-danger mt-2">
          back
        </button>
      </div>
    </div>
  );
}
