import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      // localStorage.setItem("userName", res.data.user.name);

      const params = new URLSearchParams(location.search);
      const redirect = params.get("redirect") || "/";

      navigate(redirect);
    } catch (err) {

      if (err.response) {
        // Backend responded with error
        const backendMsg =
          err.response.data?.message ||
          err.response.data?.msg ||
          err.response.data?.error ||
          "Booking failed!";

        alert(`Error: ${backendMsg}`);
      } else if (err.request) {
        // Request sent but no response (server down, CORS, network)
        alert("Server not responding. Please try again.");
      } else {
        // Something else crashed
        alert("Unexpected error occurred.");
      }

      console.log("BOOKING ERROR:", err);


    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #cde4f9, #fefefe)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="shadow-lg p-4 rounded-4"
        style={{ width: "100%", maxWidth: "400px", background: "#fff" }}
      >
        <h2 className="text-center mb-4 fw-bold">Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill fw-semibold py-2"
          >
            Login
          </button>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="fw-semibold text-primary">
              Sign up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginForm;