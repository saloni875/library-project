
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/seat.css";

export default function UserSeatsLayout() {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/seats")
      .then((res) => setSeats(res.data))
      .catch((err) => console.error("Error fetching seats:", err));
  }, []);

  const handleBook = (seatId, seatNumber) => {
    console.log("User clicked seat:", seatId, seatNumber);
    // later: call POST /api/seats/book
  };

  return (
    // <div style={{ padding: "2rem" }}>
    //   <h2>Select Your Seat</h2>
    //   <div className="seat-grid">
    //     {seats
    //       .filter((s) => !s.isOccupied) // only empty seats for user UI
    //       .map((seat) => (
    //         <button
    //           key={seat._id}
    //           className="seat-box empty"
    //           onClick={() => handleBook(seat._id, seat.seatNumber)}
    //         >
    //           {seat.seatNumber}
    //         </button>
    //       ))}
    //   </div>
    // </div>
    <div className="seat-grid">
      {seats.map(seat => (
        <div
          key={seat._id}
          className={`seat-box ${seat.isOccupied ? "occupied" : "empty"}`}
          onClick={() => !seat.isOccupied && handleBook(seat._id)}
        >
          {seat.seatNumber}
        </div>
      ))}
    </div>
  );
}


// export default function UserLayout() {
//   const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/seats")
//       .then(res => setSeats(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   const handleBook = (id) => {
//     alert("Seat booked: " + id);
//   };

//   return (
//     <div className="seat-grid">
//       {seats.map(seat => (
//         <div
//           key={seat._id}
//           className={`seat-box ${seat.isOccupied ? "disabled" : "empty"}`}
//           onClick={() => !seat.isOccupied && handleBook(seat._id)}
//         >
//           {seat.seatNumber}
//         </div>
//       ))}
//     </div>
//   );
// }