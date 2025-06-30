import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // ← Đảm bảo đúng path
import axios from "../axios"; // ← Đảm bảo đúng path

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth(); // ← Dùng context để cập nhật user

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/sanctum/csrf-cookie");
      const res = await axios.post("/api/auth/login", formData);

      // Gán ảnh avatar tạm nếu chưa có từ server
      const userWithAvatar = {
        ...res.data.user,
        image: res.data.user.image || "https://i.ibb.co/99z3F7Wr/avatar.jpg",
      };

      // Lưu localStorage và context
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(userWithAvatar));
      login(userWithAvatar); // ← Gọi login từ context để cập nhật UI

      alert("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.response?.data || error.message);
      alert("Đăng nhập thất bại!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Đăng nhập bằng Google */}
      <div className="mb-3 d-flex align-items-center">
        <p className="text-muted mb-0 me-2">Đăng nhập bằng:</p>
        <Button
          variant="outline-secondary"
          className="google-icon-button d-flex align-items-center justify-content-center"
          onClick={() => console.log("Google login clicked")}
        >
          <img
            src="/images/google-icon.png"
            alt="Google Icon"
            className="google-icon-button-img"
          />
          <span className="visually-hidden">Google</span>
        </Button>
      </div>

      {/* Divider */}
      <div className="d-flex align-items-center my-4">
        <hr className="flex-grow-1" />
        <span className="mx-3 text-muted small">Hoặc đăng nhập tài khoản:</span>
        <hr className="flex-grow-1" />
      </div>

      {/* Email */}
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Control
          type="text"
          name="email"
          placeholder="Email của bạn"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Mật khẩu */}
      <Form.Group className="mb-4" controlId="loginPassword">
        <InputGroup>
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            variant="outline-secondary"
            onClick={togglePasswordVisibility}
            className="password-toggle-btn"
          >
            {showPassword ? <EyeSlash /> : <Eye />}
          </Button>
        </InputGroup>
      </Form.Group>

      {/* Nút đăng nhập */}
      <Button variant="success" type="submit" className="w-100 py-2 submit-btn">
        ĐĂNG NHẬP
      </Button>
    </Form>
  );
};

export default LoginForm;
