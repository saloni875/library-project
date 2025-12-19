import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const { seatId } = useParams();
  const navigate = useNavigate();
  const [seatNumber, setSeatNumber] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    aadhaar: "",
  });

  useEffect(() => {
    console.log("useEffect running - fetching seat");
    axios.get(`http://localhost:5000/api/seats/book/${seatId}`)
      .then(res => {
        console.log("seat fetched:", res.data);
        setSeatNumber(res.data.seatNumber)
      })
      .catch(err => console.log(err));

  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("handle summit called");
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      alert("You must login first");

      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:5000/api/seats/book/${seatId}`,
        {
          userId,
          ...form
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      navigate(`/payment/${seatId}`);

    } catch (err) {
      console.log("BOOKING ERROR:", err.response?.data || err.message);
      alert("Booking failed!");
    }
  };
  console.log("booking form rendered");

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h3 className="text-center mb-3">Book Seat #{seatNumber}</h3>


        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="44444 44444"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Aadhaar Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 5678 9000"
              value={form.aadhaar}
              onChange={(e) => setForm({ ...form, aadhaar: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Confirm & Proceed to Payment</button>

        </form>
      </div>
    </div>
  );
}
