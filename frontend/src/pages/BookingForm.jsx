import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const { seatId } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    aadhaar: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await axios.post(
      `http://localhost:5000/api/seats/book/${seatId}`,
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Seat booked successfully!");
  };

  return (
    <div className="container">
      <h2>Book Seat #{seatId}</h2>

      <form onSubmit={handleSubmit}>
        <input required placeholder="Name" />
        <input required placeholder="Email" />
        <input required placeholder="Phone" />
        <input required placeholder="Aadhaar" />
        <button className="btn btn-primary">Confirm Booking</button>
      </form>
    </div>
  );
}
