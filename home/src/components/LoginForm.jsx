import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from '../axios'; // đường dẫn tùy theo dự án của bạn

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('🚀 Gửi dữ liệu đăng nhập:', formData);

      await axios.get('/sanctum/csrf-cookie');
      const res = await axios.post('/api/auth/login', formData);

      const userWithAvatar = {
        ...res.data.user,
        image: res.data.user.image || "https://i.ibb.co/99z3F7Wr/avatar.jpg",
      };

      localStorage.setItem('access_token', res.data.access_token);
      localStorage.setItem('user', JSON.stringify(userWithAvatar));

      alert('Đăng nhập thành công!');
      navigate('/');
    } catch (error) {
      console.error('Lỗi đăng nhập:', error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || 'Đăng nhập thất bại!'
      );
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
          onClick={() => console.log('Google login clicked')}
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
          required
        />
      </Form.Group>

      {/* Mật khẩu */}
      <Form.Group className="mb-4" controlId="loginPassword">
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
            required
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

      {/* Hiển thị lỗi */}
      {errorMessage && (
        <div className="text-danger mb-3 small">
          ⚠ {errorMessage}
        </div>
      )}

      {/* Nút đăng nhập */}
      <Button variant="success" type="submit" className="w-100 py-2 submit-btn">
        ĐĂNG NHẬP
      </Button>
    </Form>
  );
};

export default LoginForm;
