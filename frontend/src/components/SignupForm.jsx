import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #d4f1f4, #fefefe)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="shadow-lg p-4 rounded-4"
        style={{ width: "100%", maxWidth: "400px", background: "#fff" }}
      >
        <h2 className="text-center mb-4 fw-bold">Create Account</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
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
              value={form.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-semibold py-2"
          >
            Sign Up
          </button>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="fw-semibold text-success">
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupForm;
