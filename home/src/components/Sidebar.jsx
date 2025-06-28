import React from 'react';
import { FaUser, FaLock, FaShoppingBag, FaArrowRight } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
      <style>{`
        .sidebar-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: none;
          border-radius: 6px;
          padding: 12px 16px;
          font-size: 14px;
          width: 100%;
          cursor: pointer;
          transition: 0.2s ease-in-out;
        }

        .sidebar-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sidebar-btn .sidebar-icon {
          font-size: 16px;
        }

        .sidebar-btn.active {
          background-color: #80C090;
          color: white;
        }

        .sidebar-btn.inactive {
          background-color: #DDDDDD;
          color: black;
        }
      `}</style>

      <div className="d-flex flex-column gap-3">
        {/* Active item */}
        <button className="sidebar-btn active">
          <div className="sidebar-left">
            <FaUser className="sidebar-icon" />
            <span>Thông tin tài khoản</span>
          </div>
          <FaArrowRight />
        </button>

        {/* Inactive items */}
        <button className="sidebar-btn inactive">
          <div className="sidebar-left">
            <FaLock className="sidebar-icon" />
            <span>Đổi mật khẩu</span>
          </div>
          <FaArrowRight />
        </button>

        <button className="sidebar-btn inactive">
          <div className="sidebar-left">
            <FaShoppingBag className="sidebar-icon" />
            <span>Lịch sử mua hàng</span>
          </div>
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
