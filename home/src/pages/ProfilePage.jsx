import React from "react";
import Sidebar from "../components/Sidebar";
import ProfileForm from "../components/ProfileForm";

const ProfilePage = () => {
  return (
    <div
      className="container-fluid"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="row">
        {/* Sidebar bên trái */}
        <div className="col-md-3 bg-white p-3 border-end">
          <Sidebar active="Thông tin tài khoản" />
        </div>

        {/* Form bên phải */}
        <div className="col-md-9 p-4">
          <h4 className="fw-bold mb-4 text-center">HỒ SƠ</h4>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
