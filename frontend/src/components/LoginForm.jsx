import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
    alert("Login clicked (frontend only)");
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

        <form onSubmit={handleSubmit}>
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
