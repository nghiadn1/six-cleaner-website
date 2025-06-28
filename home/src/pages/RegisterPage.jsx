// src/pages/RegisterPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import RegisterForm from '../components/RegisterForm.jsx';

const RegisterPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}


      {/* Main content */}
      <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5">
        <div className="main-form-container w-100" style={{ maxWidth: '500px' }}>
          <div className="bg-white rounded p-4 shadow">
            <h3 className="text-center mb-4">Đăng ký tài khoản</h3>

            <RegisterForm />

            <p className="text-center text-muted mt-3">
              Bạn đã có tài khoản?{' '}
              <a href="/dang-nhap" className="form-link text-decoration-none text-primary">
                Đăng nhập
              </a>
            </p>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RegisterPage;
