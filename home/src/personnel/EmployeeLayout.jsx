// personnel/EmployeeLayout.jsx
import React from "react";
import { Card, Table, Button, Badge, Form } from 'react-bootstrap';
import {
    Clock,
    User,
    ClipboardList,
    LogOut,
    Bell,
    Search
} from "lucide-react";
import Sidebar from "./Sidebar";


const EmployeeLayout = ({ children }) => {
    return (
        <div className="d-flex">
            {/* Sidebar trái */}
            <Sidebar />

            {/* Nội dung bên phải */}
            <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: "100vh" }}>
                {/* Topbar ngang */}
                <div
                    className="d-flex justify-content-between align-items-center border-bottom px-4 bg-white sticky-top"
                    style={{ zIndex: 998, height: '60px' }}
                >
                    {/* Search */}
                    <div className="position-relative" style={{ width: "400px" }}>
                        <span
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "15px",
                                transform: "translateY(-90%)",
                                color: "#555",
                                pointerEvents: "none",
                            }}
                        >
                            <Search size={18} />
                        </span>
                        <input
                            type="text"
                            className="form-control rounded-pill ps-5"
                            placeholder="Tìm kiếm"
                        />
                    </div>
                    {/* Avatar + thông báo */}
                    <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-light position-relative">
                            <Bell size={18} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                3
                            </span>
                        </button>

                        <div className="d-flex align-items-center gap-2">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="avatar"
                                className="rounded-circle"
                                width={32}
                                height={32}
                            />
                            <div className="d-none d-md-block">
                                <div className="fw-semibold">Minh Quân</div>
                                <div className="text-muted small" style={{ fontSize:'12px'}}>NV dọn dẹp</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 bg-light" style={{ flexGrow: 1 }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default EmployeeLayout;
