// src/pages/AdminSeatLayout.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/seat.css";

export default function AdminSeatLayout() {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/seats")
      .then((res) => setSeats(res.data))
      .catch((err) => console.error("Error fetching seats:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Seat Layout</h2>
      <div className="seat-grid">
        {seats.map((seat) => (
          <div
            key={seat._id}
            className={`seat-box ${seat.isOccupied ? "occupied" : "empty"}`}
          >
            <p>Seat {seat.seatNumber}</p>
            <small>Status: {seat.isOccupied ? "Booked" : "Empty"}</small>
          </div>
        ))}
      </div>
    </div>
  );
}



// import { useEffect, useState} from "react";
// import axios from "axios";

// export default function SeatLayout() {
//   const [seats, setSeats] = useState([]);


//   useEffect(() => {
//     axios.get("http://localhost:5000/api/seats")
//       .then(res => setSeats(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="seat-grid">
//       {seats.map(seat => (
//         <div
//           key={seat._id}
//           className={`seat-box ${seat.isOccupied ? "occupied" : "empty"}`}
//         >
//           <p>{seat.seatNumber}</p>
//           <button>Edit</button>
//           <button>Free Seat</button>
//           <button>Assign Member</button>
//         </div>
//       ))}
//     </div>
//   );
// }
