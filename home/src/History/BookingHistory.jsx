import React, { useState } from 'react';
import { User, MapPin, Phone } from 'lucide-react';

const BookingHistory = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const bookings = [
    {
      id: 1,
      service: 'Vệ sinh thảm',
      date: 'Thứ năm, ngày 30/5/2025',
      time: 'Size M, 14:00',
      note: 'Ghi chú:',
      customer: {
        name: 'Hello',
        phone: '0987654251',
        address: '123 Hải Châu, Đà Nẵng',
      },
      staff: {
        name: 'Hello',
        phone: '0987654251',
        avatar: 'https://phanmemmkt.vn/wp-content/uploads/2024/09/avt-Facebook-hai-huoc.jpg' // hoặc link ảnh bất kỳ
      },
      price: 233000,
      status: 'pending',
    },
    // Thêm đơn hàng khác nếu cần
  ];

  const filtered = bookings.filter((item) => item.status === activeTab);

  return (
    <div className="container py-4 font-sans">
      <h4 className="text-center fw-bold mb-4">THÔNG TIN ĐẶT LỊCH</h4>

      {/* Tabs */}
      <div className="d-flex justify-content-center border-bottom mb-4">
        {['pending', 'completed', 'cancelled'].map((tab) => (
          <button
            key={tab}
            className={`btn border-0 rounded-0 px-4 py-2 ${
              activeTab === tab
                ? 'border-bottom border-2 border-success fw-bold text-success'
                : 'text-muted'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'pending' && 'Đơn hàng'}
            {tab === 'completed' && 'Hoàn thành'}
            {tab === 'cancelled' && 'Đã huỷ'}
          </button>
        ))}
      </div>

      {/* Danh sách đơn hàng */}
      {filtered.length > 0 ? (
        filtered.map((item) => (
          <div key={item.id} className="bg-white border rounded p-4 mb-4 shadow-sm">
            <div className="row align-items-center">
              {/* Thông tin dịch vụ */}
              <div className="col-md-3 d-flex gap-3">
                <img
                  src="/images/cleaning-5.jpg"
                  alt="Service"
                  className="rounded"
                  width={100}
                  height={100}
                />
                <div>
                  <h6 className="fw-bold mb-1">{item.service}</h6>
                  <p className="mb-1 small">
                    <i className="bi bi-calendar"></i> {item.date}
                  </p>
                  <p className="mb-1 small">
                    <i className="bi bi-clock"></i> {item.time}
                  </p>
                  <p className="mb-0 small">
                    <i className="bi bi-card-text"></i> {item.note}
                  </p>
                </div>
              </div>

              {/* Khách hàng */}
              <div className="col-md-3 mt-3 mt-md-0">
                <p className="fw-bold mb-1">Thông tin khách hàng</p>
                <p className="mb-1 small">
                  <User size={14} className="me-1" /> {item.customer.name}
                </p>
                <p className="mb-1 small">
                  <Phone size={14} className="me-1" /> {item.customer.phone}
                </p>
                <p className="mb-0 small">
                  <MapPin size={14} className="me-1" /> {item.customer.address}
                </p>
              </div>

              {/* Nhân viên */}
              <div className="col-md-2 mt-3 mt-md-0">
                <p className="fw-bold mb-2">Thông tin nhân viên</p>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={item.staff.avatar}
                    alt="avatar"
                    className="rounded-circle"
                    width={60}
                    height={60}
                  />
                  <div>
                    <p className="mb-0 small fw-semibold">{item.staff.name}</p>
                    <p className="mb-0 small">
                      <Phone size={14} className="me-1" />
                      {item.staff.phone}
                    </p>
                  </div>
                </div>
              </div>


              {/* Giá và nút */}
              <div className="col-md-4 mt-3 mt-md-0 text-md-end">
                <p className="fw-bold mb-2">
                  Thành tiền: <span className="ms-2">{item.price.toLocaleString()}đ</span>
                </p>
                {activeTab === 'pending' && (
                  <div className="d-flex gap-2 justify-content-md-end">
                    <button className="btn btn-outline-success btn-sm rounded-pill px-3">
                      Huỷ/Hoàn tiền
                    </button>
                    <button className="btn btn-success btn-sm rounded-pill px-3">
                      Hoàn thành
                    </button>
                  </div>
                )}
              </div>
            </div>

            <hr />
            <p className="text-muted small mb-0">
              Đơn hàng sẽ tự động chuyển sang trạng thái hoàn thành sau 3 tiếng nếu bạn không cập nhật gì.
            </p>
          </div>
        ))
      ) : (
        <div className="text-center text-muted py-5">
          <i className="bi bi-inbox fs-1 mb-2 d-block"></i>
          Không có đơn hàng
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
