import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light small pt-4">
      <div className="container">

        {/* PHẦN TRÊN CÙNG */}
        <div className="row text-center text-white mb-4">
          {/* Hỗ trợ kỹ thuật */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="/images/icon kt.png"
              alt="Hỗ trợ kỹ thuật"
              style={{ width: '40px', marginBottom: '8px' }}
            />
            <small className="text-white-50">Hỗ trợ kĩ thuật</small>
            <p className="text-success fw-bold mb-0">028 2219 6666</p>
          </div>

          {/* Phản ánh */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="/images/phone.png"
              alt="Phản ánh"
              style={{ width: '36px', marginBottom: '8px' }}
            />
            <small className="text-white-50">Phản ánh</small>
            <p className="text-success fw-bold mb-0">0938 98 7577</p>
          </div>

          {/* Email hỗ trợ */}
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src="/images/email.png"
              alt="Email hỗ trợ"
              style={{ width: '36px', marginBottom: '8px' }}
            />
            <small className="text-white-50">Email hỗ trợ</small>
            <p className="text-success fw-bold mb-0">cskh@halink.vn</p>
          </div>
        </div>


        {/* CÁC CỘT CHÍNH */}
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
          <div>
            <h6 className="text-success fw-bold">SIX CLEAN</h6>
            <ul className="list-unstyled">
              <li> Giới thiệu</li>
              <li>Tin công ty</li>
              <li>Tuyển dụng</li>
              <li> Quy định sử dụng</li>
              <li> Chính sách hoàn tiền</li>
              <li> Góp ý - Khiếu nại</li>
              <li> Liên hệ</li>
            </ul>
          </div>
          <div>
            <h6 className="text-success fw-bold">DỊCH VỤ</h6>
            <ul className="list-unstyled">
              <li> Dịch vụ giúp việc</li>
              <li> Dọn dẹp văn phòng</li>
              <li> Dịch vụ chuyển nhàg</li>
              <li> Vệ sinh máy giặt</li>
              <li> Vệ sinh thảm</li>
              <li> Vệ sinh nệm</li>
            </ul>
          </div>
          <div>
            <h6 className="text-success fw-bold">HỖ TRỢ</h6>
            <ul className="list-unstyled">
              <li> Thông tin thanh toán</li>
              <li> Hợp tác kinh doanh</li>
              <li> Tài liệu hướng dẫn</li>
              <li> Tiện ích - Công cụ</li>
              <li> Tin tức</li>
            </ul>
          </div>
          <div>
            <h6 className="text-success fw-bold">LIÊN HỆ</h6>
            <p className="fw-bold mb-1">CÔNG TY TNHH TM DV HALINK</p>
            <p className="mb-1">Tầng 4, Tòa nhà DTEC TOWER - Số 6</p>
            <p className="mb-1">Phan Chu Trinh, P.Tân Thành, Q.Tân Phú, TP.HCM</p>
            <p className="mb-1">📞 028 2219 6666</p>
            <p className="mb-0">✉️ cskh@halink.vn</p>
          </div>
        </div>

        {/* DÒNG LOGO VÀ MÔ TẢ */}
        <div className="row align-items-start mt-4 pt-3 border-top border-secondary">
        {/* Logo bên trái */}
        <div className="col-md-2 text-center text-md-start mb-3 mb-md-0">
          <img src="/images/logo.png" alt="SIX CLEAN" style={{ height: '80px' }} />
        </div>

        {/* Văn bản bên phải */}
        <div className="col-md-10">
          <p className="fw-bold mb-1">SIX CLEAN – CUNG CẤP DỊCH VỤ VỆ SINH CHUYÊN NGHIỆP</p>
          <p className="fst-italic mb-0" style={{ fontSize: '0.9rem', color: '#ccc' }}>

          Six Clean là công ty cung cấp các dịch vụ vệ sinh dọn dép uy tín, chất lượng.
          Có đội ngũ nhân viên được đào tạo bài bản, tay nghề cao, nhiều kinh nghiệm. 
          Hiện tại, các dịch vụ tại Clean Saigon đã có mặt tại thành phố Đà Nẵng và mong muốn vươn lên phát triển với nhiều thành phố lớn khác cùng với sự góp mặt tại các sân chơi quốc tế.
          </p>
        </div>
        <div className="text-center text-secondary mt-4">
          © 2025 SIX CLEAN – Giải pháp cung cấp dịch vụ vệ sinh
        </div>
</div>

      </div>
      
    </footer>
  );
};

export default Footer;
