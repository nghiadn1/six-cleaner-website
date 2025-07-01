import React from "react";
import { NavLink } from "react-router-dom";
import {
    Clock,
    User,
    ClipboardList,
    LogOut
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
    return (
        <div className="d-flex">
            {/* Sidebar trái cố định */}
            <div
                className="d-flex flex-column bg-white border-end shadow-sm position-fixed"
                style={{ width: "250px", height: "100vh", zIndex: 1000 }}
            >
                {/* Logo */}
                <div className="px-3 py-2 border-bottom">
                    <img
                        src="/images/logo.png"
                        alt="Six Clean Logo"
                        style={{ height: "40px", objectFit: "contain" }}
                    />
                </div>

                {/* Toàn bộ menu + logout nằm trong cột dọc */}
                <div className="flex-grow-1 d-flex flex-column">
                    {/* Menu */}
                    <nav className="p-2 d-flex flex-column gap-1">
                        <NavLink to="/cham-cong" className="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded">
                            <Clock size={18} /> Chấm công
                        </NavLink>

                        <NavLink to="/ho-so-nhan-vien" className="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded">
                            <User size={18} /> Hồ sơ nhân viên
                        </NavLink>

                        <NavLink to="/report" className="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded">
                            <ClipboardList size={18} /> Báo cáo
                        </NavLink>

                        <NavLink to="/orders" className="nav-link d-flex align-items-center gap-2 px-3 py-2 rounded">
                            <ClipboardList size={18} /> Đơn hàng
                        </NavLink>
                    </nav>

                    {/* Nút đăng xuất nằm dưới cùng nhờ mt-auto */}
                    <div className="mt-auto p-3 border-top">
                        <button className="btn btn-outline-danger w-100 d-flex align-items-center gap-2 justify-content-center">
                            <LogOut size={16} /> Đăng xuất
                        </button>
                    </div>
                </div>
            </div>

            {/* Phần bên phải: Topbar + Content */}
            <div
                className="flex-grow-1 d-flex flex-column"
                style={{ marginLeft: "200px", width: "calc(100% - 250px)" }}
            >
                <div className="flex-grow-1 bg-light p-3" style={{ minHeight: "100vh", overflowY: "auto" }}>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
