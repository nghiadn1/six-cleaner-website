import React, { useState } from "react";
import axios from "../axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const email = localStorage.getItem("reset_email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("/api/auth/verify-otp", { email, otp });
      window.location.href = "/reset-password";
    } catch (err) {
      setError(err.response?.data?.message || "Mã OTP không hợp lệ.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h4 className="text-center mb-4">Nhập mã OTP</h4>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="6"
          className="form-control mb-3"
          placeholder="Nhập mã OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button className="btn btn-success w-100">Xác minh</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
