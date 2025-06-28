import React from "react";

export default function PartnerRegister() {
  return (
    <div className="bg-light text-dark">
      {/* Banner + Form */}
      <section className="py-5" style={{ background: "#e2f0ca" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold">Thu nhập nhiều hơn.<br />Cuộc sống tốt hơn.</h2>
              <p>
                Giờ đây, bạn không chỉ dễ dàng kiếm tiền,
                mà còn chủ động về thời gian của bạn để cải thiện chất lượng cuộc sống.
              </p>
              <img src="/images/anh1.png" alt="Đối tác" className="img-fluid mt-3" style={{ maxWidth: "400px" }} />

            </div>

            {/* Form */}
            <div className="col-md-6 bg-white p-4 rounded shadow-sm">
              <h4 className="fw-bold mb-3">Trở thành đối tác<br />Dọn dẹp nhà</h4>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Họ, tên" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Số điện thoại" />
                </div>
                <div className="mb-3">
                  <input type="number" className="form-control" placeholder="Tuổi" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Chọn quận tại Đà Nẵng</label>
                  <select className="form-select" defaultValue="">
                    <option value="" disabled style={{ color: "#6c757d" }}>Chọn quận</option>
                    <option>Hải Châu - Thanh Khê</option>
                    <option>Sơn Trà - Ngũ Hành Sơn - Cẩm Lệ </option>
                    <option>Liên Chiểu - Hòa Vang</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Dịch vụ ứng tuyển</label>
                  <select className="form-select" defaultValue="">
                    <option value="" disabled>Chọn dịch vụ</option>
                    <option>Dịch vụ giúp việc</option>
                    <option>Dọn dẹp văn phòng</option>
                    <option>Dịch vụ chuyển nhà</option>
                    <option>Vệ sinh máy giặt</option>
                    <option>Vệ sinh thảm </option>
                    <option>Vệ sinh nệm </option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="agree" />
                  <label className="form-check-label small" htmlFor="agree">
                    Tôi đồng ý việc đại diện từ Six Cleaner liên lạc với tôi thông qua số điện thoại mà tôi đăng ký.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn text-white fw-bold px-4"
                  style={{ backgroundColor: "#76c286", borderColor: "#76c286" }}
                >
                  Đăng ký nhận việc
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Đặc quyền của đối tác */}
      <section className="py-5 bg-white">
        <div className="container">
          <h4 className="fw-bold mb-4">Đặc quyền của đối tác</h4>
          <div className="row mb-4">
            <div className="col">
              <img src="/images/ảnh.jpg" alt="benefit" className="img-fluid rounded" />
            </div>
          </div>

          <div className="row text-center g-4">
            {[
              { img: "benefit1.png", title: "Không bị phụ thuộc vào một khách hàng", desc: "Bạn chỉ cần nhận việc trên ứng dụng mà không cần phải tìm kiếm khách hàng." },
              { img: "benefit2.png", title: "Linh động về thời gian", desc: "Tự chủ chọn việc phù hợp về thời gian, địa điểm hay giá tiền." },
              { img: "benefit3.png", title: "Thu nhập cao", desc: "Thu nhập lên đến 20 triệu/tháng nếu bạn tích cực và siêng năng." },
              { img: "benefit4.png", title: "Đảm bảo quyền lợi lao động", desc: "Được hưởng chính sách hỗ trợ của công ty lên đến 100 triệu đồng." },
            ].map((item, idx) => (
              <div className="col-md-3" key={idx}>
                <img src={`/images/${item.img}`} alt={item.title} style={{ height: 25 }} />
                <h6 className="fw-semibold mt-2">{item.title}</h6>
                <p className="small">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Các bước đăng ký */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h5 className="fw-bold mb-5">Các bước đăng ký</h5>

          {/* Timeline */}
          <div className="position-relative">
            {/* Line */}
            <div
              className="position-absolute top-0 start-0 end-0 border-top"
              style={{
                top: '20px',
                zIndex: 1,
              }}
            ></div>

            {/* 4 cột mốc */}
            <div className="row text-center justify-content-between" style={{ position: 'relative', zIndex: 2 }}>
              {[
                { step: 'Bước 1', desc: 'Đăng ký trực tiếp trên website của Six Cleaner. Điền thông tin và chọn dịch vụ cần đăng ký.' },
                { step: 'Bước 2', desc: 'Nộp hồ sơ & phỏng vấn.' },
                { step: 'Bước 3', desc: 'Hoàn tất các hồ sơ cần thiết và ký bản cam kết.' },
                { step: 'Bước 4', desc: 'Trở thành đối tác của Six Cleaner và bắt đầu nhận việc.' },
              ].map((item, idx) => (
                <div key={idx} className="col-3 d-flex flex-column align-items-center">
                  {/* Marker */}
                  <div
                    className="bg-dark mb-3"
                    style={{
                      width: 14,
                      height: 14,
                      transform: 'rotate(45deg)',
                    }}
                  ></div>

                  {/* Text */}
                  <div className="fw-bold">{item.step}</div>
                  <small className="text-muted">{item.desc}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cần biết khi đk */}
      <section className="py-5 bg-white">
        <div className="container">
          <h3 className="fw-bold mb-4">Những điều cần thiết khi đăng ký</h3>
          <div className="row">
            {/* Yêu cầu chung */}
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3 fs-3">🔧</div>
                <div>
                  <h6 className="fw-bold">Yêu cầu chung</h6>
                  <ul className="mb-0">
                    <li>Có điện thoại di động thông minh.</li>
                    <li>Có đầy đủ dụng cụ cần thiết để thực hiện công việc.</li>
                    <li>Có kinh nghiệm và thái độ chuyên nghiệp.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hồ sơ yêu cầu */}
            <div className="col-md-6 mb-4">
              <div className="d-flex align-items-start">
                <div className="me-3 fs-3">📄</div>
                <div>
                  <h6 className="fw-bold">Hồ sơ yêu cầu</h6>
                  <div className="mb-2"><strong>Đối với công ty</strong></div>
                  <ul>
                    <li>Bản sao công chứng Giấy phép Đăng ký Kinh doanh.</li>
                    <li>Danh sách các nhân viên đăng ký làm việc.</li>
                  </ul>

                  <div className="mb-2"><strong>Đối với nhân viên</strong></div>
                  <ul>
                    <li>Hình chụp rõ khuôn mặt rõ nét, nụ cười thân thiện.</li>
                    <li>Bản sao Chứng minh nhân dân.</li>
                  </ul>

                  <p className="text-muted fst-italic mb-0">(Các giấy tờ phải được chứng thực không quá 06 tháng)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
