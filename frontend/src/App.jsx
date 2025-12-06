import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Gallery from "./pages/Gallery";
import AdminSeatLayout from "./pages/AdminSeatLayout";
import UserSeatLayout from "./pages/UserSeatLayout";
import BookingForm from "./pages/BookingForm";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seats" element={<AdminSeatLayout/>} />
        <Route path="/book-seats" element={<UserSeatLayout />} />
        <Route path="/book-seats/:seatId" element={ <BookingForm/>}  />

      </Route>
    </Routes>
  );
}