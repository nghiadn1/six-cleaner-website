import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const WashingService = () => {
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
                    <h1 className="display-5 fw-bold">Dọn Dẹp Văn Phòng Six Clean</h1>
                    <p className="lead " style={{ fontSize: '15px' }}>
                        Nhịp sống công sở hiện đại ngày càng bận rộn với lịch họp dày đặc, deadline liên tục và những ưu tiên khác<br></br> trong vận hành doanh nghiệp.
                        Việc đảm bảo môi trường làm việc sạch sẽ, chuyên nghiệp lại thường bị bỏ qua<br></br> hoặc giao cho đội ngũ thiếu kinh nghiệm.
                        Nhiều công ty phải chi khoản lớn hàng tháng để thuê nhân sự vệ sinh<br></br> cố định nhưng lại không sử dụng hết công suất, gây lãng phí.
                        Trong khi đó, văn phòng không phải lúc nào cũng <br></br>cần vệ sinh liên tục mỗi ngày. Đây chính là lúc dịch vụ dọn dẹp văn phòng theo giờ
                        của Six Clean trở thành giải<br></br> pháp tối ưu, giúp doanh nghiệp tiết kiệm chi phí, linh hoạt thời gian và vẫn đảm bảo không gian làm việc luôn
                        <br></br>sạch sẽ, chuyên nghiệp!
                    </p>
                    <button className="btn btn-success px-4">Đặt lịch ngay</button>
                </div>
            </div>
            {/* Section 2 */}
            <section className="fs-5 py-5">
                <div className="container d-flex justify-content-center">
                    <div style={{ maxWidth: "960px", textAlign: "justify" }}>
                        <div className="text-start mb-3">
                            <h3 className="h5 fw-bold fs-5">
                                Giải pháp dọn dẹp văn phòng của Six Clean:
                            </h3>
                        </div>
                        <div>
                            Mỗi khi doanh nghiệp cần tìm kiếm giải pháp vệ sinh văn phòng định kỳ hoặc tổng vệ sinh theo giờ,
                            việc phải làm việc qua các công ty trung gian hoặc thuê ngoài không chính thống thường dẫn đến nhiều bất tiện:
                            không đảm bảo được nhân sự uy tín, chất lượng dịch vụ không đồng đều, dễ xảy ra tình trạng vắng mặt,
                            làm việc không đúng giờ hoặc không đảm bảo vệ sinh đúng tiêu chuẩn.<br /><br />

                            Dịch vụ dọn dẹp văn phòng theo giờ của Six Clean ra đời nhằm giải quyết triệt để các vấn đề đó.
                            Chỉ với vài thao tác đặt lịch đơn giản, doanh nghiệp có thể lựa chọn thời gian phù hợp,
                            nhân viên vệ sinh chuyên nghiệp và biết trước chi phí dịch vụ một cách minh bạch –
                            giống như cách bạn gọi xe công nghệ ngày nay.<br /><br />

                            Tất cả thông tin về thời gian làm việc, nhân viên thực hiện, hình ảnh, và giá cả đều được công khai rõ ràng.
                            Six Clean cam kết chất lượng dọn dẹp sạch sẽ, đúng giờ, phục vụ tận tâm và đảm bảo an toàn cho tài sản doanh nghiệp.
                            Ngoài ra, hệ thống còn hỗ trợ kết nối thanh toán linh hoạt, quản lý lịch sử đơn hàng,
                            phù hợp với nhu cầu hiện đại và chuyên nghiệp của các văn phòng, công ty hiện nay.
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 */}
            <section className="py-5">
                <div className="container-fluid">
                    <h3 className="h5 fw-bold mb-4 text-center">
                        CÁC CÔNG VIỆC CỦA DỊCH VỤ DỌN DẸP VĂN PHÒNG
                    </h3>
                    <div id="guviCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
                        <div className="carousel-inner rounded shadow-sm overflow-hidden">
                            {/* Slide 1: Khu vực làm việc (bàn, ghế, máy tính) */}
                            <div className="carousel-item active">
                                <div className="position-relative d-flex justify-content-center">
                                    <div style={{ position: "relative", maxWidth: "50%" }}>
                                        <img
                                            src="/images/van-phong-1.jpg"
                                            className="img-fluid rounded w-100"
                                            style={{ height: "auto" }}
                                            alt="Khu vực làm việc"
                                        />
                                        {/* Nút prev */}
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="prev"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        {/* Nút next */}
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="next"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                right: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Caption giữ nguyên */}
                                <div
                                    className="carousel-caption d-none d-md-block text-white text-start bg-dark bg-opacity-75 p-5"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        right: "0",
                                        transform: "translate(-50%, -50%)",
                                        bottom: 0,
                                        width: "50%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "left"
                                    }}
                                >
                                    <div
                                        className="position-absolute"
                                        style={{
                                            top: "70%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)"
                                        }}
                                    >
                                        <h5 className="fw-bold mb-3">Khu vực làm việc (bàn, ghế, máy tính)</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Lau sạch mặt bàn làm việc, bàn họp.</li>
                                            <li>Vệ sinh ghế ngồi (lau chân, lưng ghế).</li>
                                            <li>Phủi bụi máy tính, bàn phím, màn hình (không dùng nước).</li>
                                            <li>Dọn rác, thay túi rác dưới bàn làm việc.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2: Sàn nhà */}
                            <div className="carousel-item">
                                <div className="position-relative d-flex justify-content-center">
                                    <div style={{ position: "relative", maxWidth: "50%" }}>
                                        <img
                                            src="/images/san-nha.jpg"
                                            className="img-fluid rounded w-100"
                                            style={{ height: "auto" }}
                                            alt="Sàn nhà"
                                        />
                                        {/* Nút prev */}
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="prev"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>

                                        {/* Nút next */}
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="next"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                right: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Caption giữ nguyên */}
                                <div
                                    className="carousel-caption d-none d-md-block text-white text-start bg-dark bg-opacity-75 p-5"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        right: "0",
                                        transform: "translate(-50%, -50%)",
                                        bottom: 0,
                                        width: "50%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "left"
                                    }}
                                >
                                    <div
                                        className="position-absolute"
                                        style={{
                                            top: "70%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)"
                                        }}
                                    >
                                        <h5 className="fw-bold mb-3">Sàn nhà</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Quét và lau sàn văn phòng bằng nước lau sàn chuyên dụng</li>
                                            <li>Hút bụi thảm trải sàn (nếu có)</li>
                                            <li>Lau sạch các vết bẩn cứng đầu (nước, cà phê, vết bùn...)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 3: Phòng vệ sinh */}
                            <div className="carousel-item">
                                <div className="position-relative d-flex justify-content-center">
                                    <div style={{ position: "relative", maxWidth: "50%" }}>
                                        <img
                                            src="/images/phong-ve-sinh.jpg"
                                            className="img-fluid rounded w-100"
                                            style={{ height: "auto" }}
                                            alt="Phòng bếp"
                                        />
                                        {/* Nút prev */}
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="prev"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>

                                        {/* Nút next */}
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="next"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                right: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Caption giữ nguyên */}
                                <div
                                    className="carousel-caption d-none d-md-block text-white text-start bg-dark bg-opacity-75 p-5"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        right: "0",
                                        transform: "translate(-50%, -50%)",
                                        bottom: 0,
                                        width: "50%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "left"
                                    }}
                                >
                                    <div
                                        className="position-absolute"
                                        style={{
                                            top: "70%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)"
                                        }}
                                    >
                                        <h5 className="fw-bold mb-3">Khu vực nhà vệ sinh</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Cọ rửa kỹ càng bồn rửa mặt, bồn cầu</li>
                                            <li>Lau gương, lau khô bề mặt</li>
                                            <li>Đổ rác, thay giấy vệ sinh, xà phòng</li>
                                            <li>Khử mùi, lau sàn nhà vệ sinh bằng hóa chất chuyên dụng</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 4: Phòng ngủ */}
                            <div className="carousel-item">
                                <div className="position-relative d-flex justify-content-center">
                                    <div style={{ position: "relative", maxWidth: "50%" }}>
                                        <img
                                            src="/images/van-phong-2.jpg"
                                            className="img-fluid rounded w-100"
                                            style={{ height: "auto" }}
                                            alt="Phòng bếp"
                                        />
                                        {/* Nút prev */}
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="prev"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>

                                        {/* Nút next */}
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#guviCarousel"
                                            data-bs-slide="next"
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                right: "10px",
                                                transform: "translateY(-50%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Caption giữ nguyên */}
                                <div
                                    className="carousel-caption d-none d-md-block text-white text-start bg-dark bg-opacity-75 p-5"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        right: "0",
                                        transform: "translate(-50%, -50%)",
                                        bottom: 0,
                                        width: "50%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "left"
                                    }}
                                >
                                    <div
                                        className="position-absolute"
                                        style={{
                                            top: "70%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)"
                                        }}
                                    >
                                        <h5 className="fw-bold mb-3">Các công việc khác</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Đổ rác toàn bộ văn phòng</li>
                                            <li>Lau cửa kính bên trong</li>
                                            <li>Lau quạt, điều hòa (phần vỏ ngoài)</li>
                                            <li>Bổ sung các vật dụng: nước rửa tay, giấy vệ sinh (nếu có yêu cầu)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 4: Bảng giá */}
            <section className="py-5" style={{ backgroundColor: '#6FC190' }}>
                <div className="container-lg" style={{ maxWidth: '950px' }}>
                    <h4 className="text-center fw-bold text-uppercase text-dark mb-5">
                        Bảng giá dịch vụ dọn dẹp theo giờ
                    </h4>
                    <div className="row g-4 justify-content-center">
                        {/* Gói 3 giờ */}
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 shadow-lg text-center px-4 py-5 h-100 position-relative">
                                <div className="mb-3">
                                    <img src="/images/icon8.png" alt="Clock Icon" style={{ width: '70px' }} />
                                </div>
                                <h5 className="fw-bold text-uppercase">GÓI 3 GIỜ</h5>
                                <div className="text-decoration-line-through text-muted small">279.000đ</div>
                                <div
                                    className="fw-bold fs-3 text-white mb-3"
                                    style={{ backgroundColor: '#00C853', padding: '10px 0', borderRadius: '4px' }}>
                                    233.000đ
                                </div>
                                <ul className="list-unstyled text-start small fs-6">
                                    <li>➤ Diện tích từ 85m²</li>
                                    <li>➤ Hoặc nhà 3 phòng</li>
                                    <li>➤ Khối lượng việc vừa</li>
                                </ul>
                                <button className="btn btn-success mt-3 px-4">ĐĂNG KÝ</button>
                            </div>
                        </div>

                        {/* Gói 2 giờ */}
                        <div className="col-md-4">
                            <div
                                className="bg-white rounded-4 shadow-lg text-center px-4 py-5 h-100 position-relative"
                                style={{
                                    borderTop: '6px solid #00C853',
                                    transform: 'scale(1.05)',
                                    zIndex: 2
                                }}
                            >
                                <div className="mb-3">
                                    <img src="/images/icon8.png" alt="Clock Icon" style={{ width: '70px' }} />
                                </div>
                                <h5 className="fw-bold text-uppercase">GÓI 2 GIỜ</h5>
                                <div className="text-decoration-line-through text-muted small">216.000đ</div>
                                <div
                                    className="fw-bold fs-2 text-white mb-3"
                                    style={{ backgroundColor: '#00C853', padding: '10px 0', borderRadius: '4px' }}
                                >
                                    188.000đ
                                </div>
                                <ul className="list-unstyled text-start small fs-6">
                                    <li>➤ Diện tích từ 55m²</li>
                                    <li>➤ Hoặc nhà 2 phòng</li>
                                    <li>➤ Khối lượng việc ít</li>
                                </ul>
                                <button className="btn btn-success mt-3 px-4">ĐĂNG KÝ</button>
                            </div>
                        </div>

                        {/* Gói 4 giờ */}
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 shadow-lg text-center px-4 py-5 h-100 position-relative">
                                <div className="mb-3">
                                    <img src="/images/icon8.png" alt="Clock Icon" style={{ width: '70px' }} />
                                </div>
                                <h5 className="fw-bold text-uppercase">GÓI 4 GIỜ</h5>
                                <div className="text-decoration-line-through text-muted small">344.000đ</div>
                                <div
                                    className="fw-bold fs-3 text-white mb-3"
                                    style={{ backgroundColor: '#00C853', padding: '10px 0', borderRadius: '4px' }}
                                >
                                    300.000đ
                                </div>
                                <ul className="list-unstyled text-start small fs-6">
                                    <li>➤ Diện tích từ 105m²</li>
                                    <li>➤ Hoặc nhà 4 phòng</li>
                                    <li>➤ Khối lượng việc nhiều</li>
                                </ul>
                                <button className="btn btn-success mt-3 px-4">ĐĂNG KÝ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
        </div>
    );
};

export default WashingService;
