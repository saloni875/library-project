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

    try {
      const res = await axios.post(
        `http://localhost:5000/api/seats/book/${seatId}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
    } catch (err) {
      console.log("BOOKING ERROR:", err.response?.data || err.message);
      alert("Booking failed!");
    }



    alert("Seat booked successfully!");
  };

  return (
    <div className="container">
      <h2>Book Seat #{seatId}</h2>

      <form onSubmit={handleSubmit}>
        {/* <input required placeholder="Name" />
        <input required placeholder="Email" />
        <input required placeholder="Phone" />
        <input required placeholder="Aadhaar" />
        */}
        <input
          required
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          required
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          required
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          required
          placeholder="Aadhaar"
          value={form.aadhaar}
          onChange={(e) => setForm({ ...form, aadhaar: e.target.value })}
        />
        <button className="btn btn-primary">Confirm Booking</button>
      </form>
    </div>
  );
}
