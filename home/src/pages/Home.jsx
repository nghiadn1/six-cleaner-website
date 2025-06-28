import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom"; // 

const Home = () => {
  // Mảng dữ liệu tiện ích
  const services = [
    {
      title: 'Dịch vụ giúp việc',
      desc: 'Tổng vệ sinh nhà cửa, căn hộ nhanh chóng, chuyên nghiệp.',
      img: '/images/cleaning-1.jpg',
    },
    {
      title: 'Dọn dẹp văn phòng',
      desc: 'Vệ sinh để có không gian làm việc sạch sẽ, gọn gàng.',
      img: '/images/cleaning-4.jpg',
    },
    {
      title: 'Dịch vụ chuyển nhà',
      desc: 'Chuyển nhà chuyên nghiệp tạo nên hành trình đổi mới.',
      img: '/images/cleaning-6.jpg',
    },
    {
      title: 'Vệ sinh máy giặt',
      desc: 'Cải thiện chất lượng giúp quần áo sạch thơm .',
      img: '/images/cleaning-3.jpg',
    },
    {
      title: 'Vệ sinh thảm',
      desc: 'Đánh bay vết bẩn mang lại không gian sạch sẽ thơm tho. ',
      img: '/images/cleaning-5.jpg',
    },
    {
      title: 'Vệ sinh nệm',
      desc: 'Đánh bay vết bẩn, mầm bệnh gây hại từ chính chiếc nệm.',
      img: '/images/cleaning-2.jpg',
    },
  ];

  return (
    <div className="font-sans">
      {/* Section 1 */}
      <div className="position-relative text-white fs-5">
        <img
          src="/images/banner.jpg"
          className="img-fluid w-100"
          style={{ objectFit: 'cover', maxHeight: '600px' }}
          alt="Banner"
        />
        <div
          className="position-absolute top-50 start-0 translate-middle-y text-start"
          style={{ paddingLeft: "7rem", lineHeight: "1.8" }}
        >
          <h1 className="display-5 fw-bold"> SIX CLEAN <br></br>Dọn là sạch – Sạch là Six Clean</h1>
          <p className="lead" style={{ fontSize: '15px' }}>
          </p>
          <button className="btn btn-success px-4"><Link className="dropdown-item" to="/dang-ky">Đăng ký ngay</Link></button>
        </div>
      </div>

      <main className="container my-5">
        {/* Tiện ích gia đình */}
        <section className="mb-5">
          <h2 className="fs-4 fw-semibold mb-4">Tất cả những tiện ích gia đình <br />mà bạn cần</h2>

          <div id="serviceCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[0, 1].map((groupIdx) => (
                <div className={`carousel-item ${groupIdx === 0 ? 'active' : ''}`} key={groupIdx}>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {services.slice(groupIdx * 3, groupIdx * 3 + 3).map((service, i) => (
                      <div className="col" key={i}>
                        <div className="card h-100 text-center">
                          <img
                            src={service.img}
                            className="card-img-top"
                            alt={service.title}
                            style={{ height: '150px', objectFit: 'cover' }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-text small">{service.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Nút điều hướng */}
            <button className="carousel-control-prev" type="button" data-bs-target="#serviceCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#serviceCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>

        {/* An tâm với lựa chọn */}
        <section className="mb-5">
          <h2 className="fs-4 fw-semibold mb-3">An tâm với lựa chọn của bạn</h2>
          <div className="mb-4">
            <img
              src="https://www.btaskee.com/wp-content/uploads/2020/11/home-page-an-tam-voi-lua-chon-cua-ban.png"
              alt="An tâm với lựa chọn"
              className="img-fluid rounded w-100"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
          </div>

          {/* 4 tiện ích */}
          <div className="row text-center">
            {[
              { text: 'Đặt lịch nhanh chóng', icon: '/images/icon1.png', desc: 'Thao tác 60 giây trên ứng dụng, có ngay người nhận việc sau 60 phút.' },
              { text: 'Giá cả rõ ràng', icon: '/images/icon2.png', desc: 'Giá dịch vụ hiển thị rõ ràng. Không phát sinh chi phí ẩn.' },
              { text: 'Đa dạng dịch vụ', icon: '/images/icon3.png', desc: '6 dịch vụ tiện ích đa dạng hỗ trợ các nhu cầu trong gia đình, nơi làm việc.' },
              { text: 'An toàn tối đa', icon: '/images/icon4.png', desc: 'Nhân viên có hồ sơ rõ ràng, được giám sát chặt chẽ và đào tạo chuyên sâu.' }
            ].map((item, idx) => (
              <div key={idx} className="col-md-3 mb-4 d-flex flex-column align-items-center text-md-start">
                <div className="mb-2" style={{ width: '52px', height: '52px' }}>
                  <img src={item.icon} alt={item.text} className="img-fluid" />
                </div>
                <h6 className="fw-bold text-center">{item.text}</h6>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            ))}
          </div>

        </section>


        {/* Quy trình sử dụng */}
        <section className="mb-5">
          <h2 className="fs-4 fw-semibold mb-4">Quy trình sử dụng dịch vụ</h2>
          {[
            { title: 'Chọn dịch vụ', desc: 'Chúng tôi có tới 6 dịch vụ tiện ích sẵn sàng hỗ trợ bạn.', img: '/images/step1.png' },
            { title: 'Chọn thời gian và địa điểm', desc: 'Xác định ngày, giờ và địa điểm để đặt dịch vụ trong vòng chưa đầy 60 giây. Bạn có thể tùy chọn số lần sử dụng theo nhu cầu.', img: '/images/step2.png' },
            { title: 'Tiến hành công việc', desc: 'Người giúp việc sẽ xác nhận đến nhà bạn như đã hẹn và thực hiện nhiệm vụ. Chất lượng luôn được đảm bảo 100%.', img: '/images/step3.png' },
            { title: 'Đánh giá và xếp hạng', desc: 'Bạn có thể đánh giá chất lượng dịch vụ thông qua website.', img: '/images/step4.png' }
          ].map((step, idx) => (
            <div key={idx} className="row align-items-center mb-4">
              <div className="col-md-5">
                <img src={step.img} alt={step.title} className="img-fluid rounded" style={{ maxWidth: '100%', width: '460px' }} />

              </div>
              <div className="col-md-7">
                <h6 className="fw-bold">{step.title}</h6>
                <p className="text-muted small mb-0">{step.desc}</p>
              </div>
            </div>
          ))}
        </section>


        {/* CTA */}
        <section
          className="text-white text-center p-5 rounded"
          style={{
            background: 'linear-gradient(90deg, #76c286, #5ab170)',
          }}
        >
          <h2 className="fs-5 fw-semibold mb-2">Đăng kí ngay hôm nay</h2>
          <p className="mb-4">Bạn đã sẵn sàng trải nghiệm Six Clean chưa? Bắt đầu ngay với việc đặt lịch đầu tiên của bạn.</p>
          <button className="btn btn-light text-success fw-semibold px-4">Trải nghiệm dịch vụ</button>
        </section>

      </main>


    </div>
  );
};

export default Home;
