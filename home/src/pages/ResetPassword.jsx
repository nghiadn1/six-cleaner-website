import React, { useState, useEffect } from "react";
import axios from "../axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("reset_email") || "");
    setOtp(localStorage.getItem("reset_otp") || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email || !otp) {
      setError("Thiếu email hoặc mã OTP.");
      return;
    }

    if (password !== confirmation) {
      setError("Xác nhận mật khẩu không khớp.");
      return;
    }

    try {
      await axios.post("/api/auth/reset-password", {
        email,
        otp,
        password,
        password_confirmation: confirmation,
      });
      setMessage("✅ Đổi mật khẩu thành công. Bạn có thể đăng nhập lại.");
      localStorage.removeItem("reset_email");
      localStorage.removeItem("reset_otp");
      setTimeout(() => {
        window.location.href = "/dang-nhap";
      }, 2000);
    } catch (err) {
      console.error(err.response?.data);
      setError(
        err.response?.data?.message ||
          "❌ Có lỗi xảy ra khi gửi yêu cầu đổi mật khẩu."
      );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h4 className="text-center mb-4">Đặt lại mật khẩu</h4>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Mật khẩu mới"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Xác nhận mật khẩu"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          required
        />
        <button className="btn btn-success w-100">Đổi mật khẩu</button>
      </form>
    </div>
  );
};

export default ResetPassword;
