import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "null") {
        const parsed = JSON.parse(storedUser);
        if (parsed && parsed.fullName) {
          setUser(parsed);
        }
      }
    } catch (err) {
      setUser(null);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("userToken"))}`,
        },
      });

      localStorage.removeItem("user");
      localStorage.removeItem("userToken");
      setUser(null);
      navigate("/dang-nhap");
    } catch (error) {
      console.error("Lỗi đăng xuất:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 sticky-top">
      <div className="container">
        <Link className="navbar-brand text-success fw-bold" to="/">
          <img src="/images/logo.png" alt="SixCleaner" style={{ height: "40px" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <ul className="navbar-nav mx-auto flex-row gap-3 text-center">
              <li className="nav-item">
                <Link to="/gioi-thieu" className="nav-link">Giới thiệu</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link d-flex align-items-center gap-1 dropdown-toggle-custom" href="#" role="button" data-bs-toggle="dropdown">
                  Dịch vụ <span style={{ fontSize: "0.75rem" }}>▼</span>
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/giup-viec-theo-gio">Dịch vụ giúp việc</Link></li>
                  <li><Link className="dropdown-item" to="/giup-viec-co-dinh">Dịch vụ giúp việc cố định</Link></li>
                  <li><Link className="dropdown-item" to="/don-dep-van-phong">Dọn dẹp văn phòng</Link></li>
                  <li><Link className="dropdown-item" to="/chuyen-nha">Dịch vụ chuyển nhà</Link></li>
                  <li><Link className="dropdown-item" to="/ve-sinh-may-giat">Vệ sinh máy giặt</Link></li>
                  <li><Link className="dropdown-item" to="/ve-sinh-tham">Vệ sinh thảm</Link></li>
                  <li><Link className="dropdown-item" to="/ve-sinh-nem">Vệ sinh nệm</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/dang-ki-doi-tac" className="nav-link">Đăng kí đối tác</Link>
              </li>
              <li className="nav-item">
                <Link to="/tin-tuc" className="nav-link">Tin tức</Link>
              </li>
              <li className="nav-item">
                <Link to="/ho-tro" className="nav-link">Hỗ trợ</Link>
              </li>
            </ul>

            <div className="ms-auto d-flex align-items-center gap-2">
              {!user ? (
                <button className="btn btn-success">
                  <Link className="dropdown-item text-white" to="/dang-nhap">login</Link>
                </button>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn btn-link dropdown-toggle p-0 d-flex align-items-center"
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={user.image || "/images/default-avatar.png"}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "35px", height: "35px", objectFit: "cover" }}
                    />
                    <span className="ms-2 fw-semibold text-muted small">Xin chào, {user.fullName}</span>
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li>
                      <Link className="dropdown-item" to="/ho-so-ca-nhan">Thông tin cá nhân</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/lich-su-dat-lich">Lịch sử đơn hàng</Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
