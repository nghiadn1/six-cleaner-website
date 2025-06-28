import React from "react";

export default function About() {
  return (
    <div className="bg-white text-dark">
      {/* GIỚI THIỆU */}
      <section className="text-center py-5">
        <div className="container">
          <h2 className="fw-semibold mb-3">Giới thiệu về Six Cleaner</h2>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            Six Cleaner là thương hiệu uy tín trong việc cung cấp dịch vụ vệ sinh công nghiệp tại Việt Nam.
            Với mục tiêu mang đến cho khách hàng sự tiện nghi và trải nghiệm dịch vụ hiện đại, chúng tôi kết hợp giữa đội ngũ chuyên nghiệp và công nghệ để nâng cao chất lượng sống cho mọi gia đình.
          </p>

          {/* NHIỆM VỤ - TẦM NHÌN */}
          <div className="row justify-content-center text-start g-4 mt-5">
            {/* Nhiệm vụ */}
            <div className="col-md-6 d-flex align-items-start">
              <img
                src="/images/about1.png"
                alt="Nhiệm vụ"
                className="me-3 mt-1 flex-shrink-0"
                style={{ width: 40, height: 40 }}
              />
              <div>
                <h5 className="fw-bold">Nhiệm vụ</h5>
                <p className="small mb-0">
                  Với nhiệm vụ sẽ trở thành một trong những công ty hàng đầu trong lĩnh vực vệ sinh công nghiệp tại Việt Nam.
                  Mang đến cho khách hàng những giải pháp tốt nhất cùng với đó là chất lượng dịch vụ được nâng cao và chi phí hợp lý nhất dành cho khách hàng.
                </p>
              </div>
            </div>

            {/* Tầm nhìn */}
            <div className="col-md-6 d-flex align-items-start">
              <img
                src="/images/about2.png"
                alt="Tầm nhìn"
                className="me-3 mt-1 flex-shrink-0"
                style={{ width: 40, height: 40 }}
              />
              <div>
                <h5 className="fw-bold">Tầm nhìn</h5>
                <p className="small mb-1">
                  Đến năm 2026, Six Cleaner sẽ cung cấp dịch vụ cho nhiều tỉnh thành, đồng thời không ngừng nâng cao chất lượng dịch vụ để mang đến giá trị tốt nhất cho khách hàng.
                </p>
                <span className="text-success fw-semibold small">OUR MISSION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ý NGHĨA THƯƠNG HIỆU */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h5 className="fw-bold mb-2">Ý nghĩa thương hiệu</h5>
              <p>
                Tên gọi "Six Cleaner" thể hiện 6 giá trị cốt lõi mà chúng tôi luôn cam kết: Sạch sẽ, nhanh chóng, an toàn, minh bạch, thân thiện và công nghệ.
                Chúng tôi mong muốn trở thành người bạn đồng hành của mọi gia đình Việt.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/images/logo.png"
                alt="app"
                className="img-fluid"
                style={{ maxHeight: 200 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* KHU VỰC HOẠT ĐỘNG */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6 text-center">
              <img
                src="/images/about3.png"
                alt="map"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold mb-2">Khu vực hoạt động</h5>
              <p>
                Six Cleaner hiện hoạt động tại thành lớn Đà Nẵng. Ví trí nơi đây ngày càng phát triển và rất cần đến dịch vụ dọn dẹp. Nắm bắt được xu hướng thị trường Six Cleaner đã ra đời đầu tiên ở thành phố đáng sống này .
                Và chúng tôi luôn cố gắng mong muốn mở rộng phát triển các thành phố ở Việt Nam cũng như các thị trường quốc tế. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LÝ DO CHỌN SIX CLEANER */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h4 className="fw-bold mb-3">Vì sao nên chọn Six Cleaner?</h4>
          <p className="mb-4">
            Chúng tôi luôn là lựa chọn hàng đầu nhờ vào sự tận tâm, đội ngũ chuyên nghiệp và cam kết chất lượng.
          </p>

          <div className="row text-center g-4">
            <div className="col-md-4">
              <img src="/images/icon5.png" alt="icon" style={{ width: 36 }} />
              <h6 className="fw-semibold mt-2">Sự hài lòng từ khách hàng</h6>
              <p className="small">Chúng tôi luôn lấy sự hài lòng làm kim chỉ nam cho mọi hoạt động và quyền lợi khách hàng luôn được đặt lên hàng đầu.</p>
            </div>
            <div className="col-md-4">
              <img src="/images/icon7.png" alt="icon" style={{ width: 36 }} />
              <h6 className="fw-semibold mt-2">Bảo hiểm và dịch vụ an toàn</h6>
              <p className="small">Đội ngũ có bảo hiểm đầy đủ và quy trình làm việc an toàn, minh bạch luôn đảm bảo sự yên tâm tuyệt đối.</p>
            </div>
            <div className="col-md-4">
              <img src="/images/icon6.png" alt="icon" style={{ width: 36 }} />
              <h6 className="fw-semibold mt-2">Đào tạo bài bản</h6>
              <p className="small">Nhân viên được đào tạo kỹ lưỡng về chuyên môn và kỹ năng, đồng thời kiểm soát chất lượng nghiêm ngặt.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
