import React, { useState } from "react";
import axios from "../axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await axios.post("/api/auth/send-otp", { email });
      setMessage("✅ Mã OTP đã được gửi về email.");
      localStorage.setItem("reset_email", email);
      window.location.href = "/verify-otp";
    } catch (err) {
      setError(err.response?.data?.message || "Có lỗi xảy ra.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h4 className="text-center mb-4">Quên mật khẩu</h4>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Nhập email đã đăng ký"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn btn-success w-100">Gửi mã OTP</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
