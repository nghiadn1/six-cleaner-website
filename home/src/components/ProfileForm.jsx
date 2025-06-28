import React, { useState } from 'react';

const ProfileForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-wrap gap-4 justify-content-between w-100">
      {/* Form bên trái */}
      <div style={{ flex: '1 1 60%', minWidth: '280px' }}>
        <h5 className="fw-bold mb-4">Thông tin tài khoản</h5>
        <div className="mb-3">
          <label className="form-label">Họ và tên:</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="form-label">Số điện thoại:</label>
          <input type="text" name="phone" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn w-100 text-white fw-bold" style={{ backgroundColor: '#80C090', borderRadius: '20px' }}>
          CẬP NHẬT
        </button>
      </div>

      {/* Avatar bên phải */}
      <div className="d-flex flex-column align-items-center justify-content-start" style={{ flex: '1 1 30%', minWidth: '200px' }}>
        <div
          className="avatar-img mb-3"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '2px solid #000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="https://placehold.co/100x100/FFF/000?text="
            alt="avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
        <label className="btn btn-light btn-sm mb-2">
          Chọn ảnh
          <input type="file" hidden />
        </label>
        <small className="text-muted text-center" style={{ fontSize: '12px', lineHeight: '1.4' }}>
          Dung lượng file tối đa 1 MB<br />Định dạng: JPEG, PNG
        </small>
      </div>
    </form>
  );
};

export default ProfileForm;
