import React, { useState } from "react";
import axios from "../axios";
import Sidebar from "../components/Sidebar";

const ChangePassword = () => {
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await axios.put("/api/profile/password", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setMessage("✅ Đổi mật khẩu thành công.");
      setForm({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
      });
    } catch (err) {
      if (err.response?.status === 422) {
        const errors = err.response.data.errors;
        setError(
          Object.values(errors).flat().join(" ") || "Dữ liệu không hợp lệ"
        );
      } else {
        setError("❌ Mật khẩu hiện tại không đúng hoặc có lỗi xảy ra.");
      }
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="row">
        {/* Sidebar bên trái */}
        <div className="col-lg-3 col-md-4 bg-white p-3 border-end">
          <Sidebar active="Đổi mật khẩu" />
        </div>

        {/* Nội dung form bên phải */}
        <div className="col-lg-9 col-md-8 d-flex justify-content-center align-items-start py-5 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 shadow-sm rounded"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <h4 className="fw-bold text-center mb-4">Đổi mật khẩu</h4>

            {message && (
              <div className="alert alert-success text-center">{message}</div>
            )}
            {error && (
              <div className="alert alert-danger text-center">{error}</div>
            )}

            <div className="mb-3">
              <input
                type="password"
                name="current_password"
                className="form-control rounded-pill bg-light"
                placeholder="Mật khẩu hiện tại"
                value={form.current_password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="new_password"
                className="form-control rounded-pill bg-light"
                placeholder="Mật khẩu mới"
                value={form.new_password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="new_password_confirmation"
                className="form-control rounded-pill bg-light"
                placeholder="Nhập lại mật khẩu mới"
                value={form.new_password_confirmation}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 rounded-pill fw-bold"
            >
              Đổi mật khẩu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
