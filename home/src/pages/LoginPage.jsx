// src/pages/LoginPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import LoginForm from '../components/LoginForm.jsx';
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Container
        fluid
        className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5"
      >
        <div className=" main-form-container">
          {/* Đã xóa logo và phụ đề ưu đãi */}

          <LoginForm />

          <div className="d-flex justify-content-between align-items-center text-muted mt-3">
            <p className="mb-0">
              Bạn chưa có tài khoản?{" "}
              <a href="/dang-ky" className="form-link">
                Đăng ký
              </a>
            </p>
            <Link to="/quen-mat-khau" className="form-link">
              Quên mật khẩu
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
