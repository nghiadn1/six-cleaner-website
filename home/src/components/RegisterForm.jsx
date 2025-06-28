import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    address_detail: '',
    province_id: '',
    district_id: '',
    ward_id: '',
    image: null,
    // role_id: 4,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.get('/sanctum/csrf-cookie');
      await axios.post('/api/auth/register', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

      alert('Đăng ký thành công!');
      navigate('/dang-nhap');
    } catch (error) {
      console.error('Lỗi đăng ký:', error.response?.data || error.message);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      }
      alert('Đăng ký thất bại!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Họ tên"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          isInvalid={!!errors.full_name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.full_name?.[0]}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email của bạn"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.[0]}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Số điện thoại"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          isInvalid={!!errors.phone_number}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone_number?.[0]}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Địa chỉ chi tiết"
          name="address_detail"
          value={formData.address_detail}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select name="province_id" value={formData.province_id} onChange={handleChange} isInvalid={!!errors.province_id}>
          <option value="">Chọn tỉnh/thành phố</option>
          <option value="1">Đà Nẵng</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.province_id?.[0]}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select name="district_id" value={formData.district_id} onChange={handleChange} isInvalid={!!errors.district_id}>
          <option value="">Chọn quận/huyện</option>
          <option value="1">Hải Châu</option>
          <option value="2">Thanh Khê</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.district_id?.[0]}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select name="ward_id" value={formData.ward_id} onChange={handleChange}>
          <option value="">Chọn phường/xã</option>
          <option value="1">Phước Ninh</option>
          <option value="2">Nam Dương</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ảnh đại diện (tùy chọn)</Form.Label>
        <Form.Control type="file" name="image" accept="image/*" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3">
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Mật khẩu"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeSlash /> : <Eye />}
          </Button>
          <Form.Control.Feedback type="invalid">
            {errors.password?.[0]}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          placeholder="Xác nhận mật khẩu"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit" className="w-100 py-2" variant="success">
        ĐĂNG KÝ
      </Button>
    </Form>
  );
};

export default RegisterForm;
