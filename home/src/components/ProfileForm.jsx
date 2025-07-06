import React, { useEffect, useState } from "react";
import axios from "../axios";

const ProfileForm = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    address_detail: "",
    image: null,
    imagePreview: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const loadUserProfile = async () => {
    try {
      const res = await axios.get("/api/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      setForm({
        full_name: user.full_name || "",
        email: user.email || "",
        phone_number: user.phone || "",
        address_detail: user.address || "",
        image: null,
        imagePreview: user.image ? `http://localhost:8000/${user.image}` : "",
      });
    } catch (err) {
      console.error("Không thể tải hồ sơ người dùng", err);
    }
  };

  useEffect(() => {
    loadUserProfile(); // luôn luôn gọi từ server
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setForm({
        ...form,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("full_name", form.full_name);
      if (form.phone_number) formData.append("phone_number", form.phone_number);
      if (form.address_detail)
        formData.append("address_detail", form.address_detail);
      if (form.image) formData.append("image", form.image);

      await axios.post("/api/profile/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      setMessage("✅ Cập nhật thành công!");
      await loadUserProfile();
    } catch (err) {
      console.error("Lỗi cập nhật:", err);
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else {
        setMessage("❌ Có lỗi xảy ra khi cập nhật.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-wrap gap-4 justify-content-between w-100"
    >
      <div style={{ flex: "1 1 60%", minWidth: "280px" }}>
        <h5 className="fw-bold mb-4">Thông tin tài khoản</h5>

        {message && <div className="alert alert-info">{message}</div>}

        <div className="mb-3">
          <label className="form-label">Họ và tên:</label>
          <input
            type="text"
            name="full_name"
            className={`form-control ${errors.full_name ? "is-invalid" : ""}`}
            value={form.full_name}
            onChange={handleChange}
          />
          {errors.full_name && (
            <div className="invalid-feedback">{errors.full_name[0]}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            disabled
            readOnly
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Số điện thoại:</label>
          <input
            type="text"
            name="phone_number"
            className={`form-control ${
              errors.phone_number ? "is-invalid" : ""
            }`}
            value={form.phone_number}
            onChange={handleChange}
          />
          {errors.phone_number && (
            <div className="invalid-feedback">{errors.phone_number[0]}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Địa chỉ:</label>
          <input
            type="text"
            name="address_detail"
            className={`form-control ${
              errors.address_detail ? "is-invalid" : ""
            }`}
            value={form.address_detail}
            onChange={handleChange}
          />
          {errors.address_detail && (
            <div className="invalid-feedback">{errors.address_detail[0]}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold">
          Cập nhật
        </button>
      </div>

      <div
        className="d-flex flex-column align-items-center"
        style={{ flex: "1 1 30%" }}
      >
        <img
          src={form.imagePreview || "https://placehold.co/100x100?text=Avatar"}
          alt="avatar"
          className="rounded-circle mb-3"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            border: "2px solid #000",
          }}
        />
        <label className="btn btn-light btn-sm mb-2">
          Chọn ảnh
          <input
            type="file"
            name="image"
            accept="image/*"
            hidden
            onChange={handleChange}
          />
        </label>
        <small className="text-muted text-center" style={{ fontSize: "12px" }}>
          Dung lượng tối đa 1MB
          <br />
          Định dạng JPEG, PNG
        </small>
      </div>
    </form>
  );
};

export default ProfileForm;
