import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MovingService = () => {
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
                    <h1 className="display-5 fw-bold">Giúp Việc Theo Giờ bTaskee</h1>
                    <p className="lead " style={{ fontSize: '15px' }}>Nhịp sống đô thị đang dần trở nên bận rộn hơn với công việc và xã hội.
                        Đặc biệt thời gian của người phụ nữ <br></br>dành cho gia đình và chăm sóc nhà cửa cũng càng trở nên eo hẹp hơn.
                        Vậy làm sao để cân bằng được giữa <br></br>công việc và gia đình luôn là vấn đề khúc mắc của nhiều gia đình Việt.
                        Đã có nhiều gia đình bỏ ra một khoản tiền <br></br>lớn hằng tháng chỉ để thuê giúp việc cố định nhưng đôi lúc việc này
                        trở nên không thực sự cần thiết vì không phải <br></br>lúc nào cũng có việc để người giúp việc làm liên tục. Lúc này giúp
                        việc nhà theo giờ sẽ là giải pháp hợp lý cho<br></br> mọi gia đình!</p>
                    <button className="btn btn-success px-4">Đặt lịch ngay</button>
                </div>
            </div>
            {/* Section 2 */}
            <section className="fs-5 py-5">
                <div className="container d-flex justify-content-center">
                    <div style={{ maxWidth: "960px", textAlign: "justify" }}>
                        <div className="text-start mb-3">
                            <h3 className="h5 fw-bold fs-5">
                                Giải pháp giúp việc theo giờ của Six Clean:
                            </h3>
                        </div>
                        <div>
                            Mỗi khi có nhu cầu tìm kiếm người giúp việc hoặc hỗ trợ việc nhà phù hợp với giờ giấc,
                            công việc của mình thì người tiêu dùng thường tìm đến các trung tâm, công ty môi giới nguồn nhân lực.
                            Do chỉ đóng vai trò trung gian nên người tiêu dùng không được các bên môi giới đảm bảo tính an toàn,
                            xác minh nhân thân kỹ càng của người lao động. Chưa kể chất lượng của người giúp việc không đồng đều
                            dẫn tới hư hại nhà cửa, bỏ việc tự ý, khiến tiền mất tật mang.<br /><br />

                            Giúp việc theo giờ của bTaskee ra đời đã giải quyết tất cả các khâu liên hệ và thủ tục xác nhận người giúp việc phức tạp ở trên.
                            Hoạt động tương tự như Grab hay Uber, chỉ từ 60 giây đặt lịch ngay trên ứng dụng bTaskee quý khách hàng đã có thể hoàn thành xong thao tác
                            đặt người giúp việc theo giờ một cách đơn giản và tiết kiệm thời gian.<br /><br />

                            Tất cả các thông tin liên hệ, giờ giấc, hình ảnh người giúp việc và giá cả sẽ được hiển thị trên ứng dụng bTaskee rõ ràng, minh bạch giúp
                            chủ nhà yên tâm hơn với chất lượng dịch vụ giúp việc theo giờ tại bTaskee. Đặc biệt ứng dụng còn có các tiện ích như kết nối các cổng thanh toán trực tuyến, Premium,….
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 */}
            <section className="py-5">
                <div className="container-fluid">
                    <h3 className="h5 fw-bold mb-4 text-center">
                        CÁC CÔNG VIỆC CỦA DỊCH VỤ DỌN NHÀ THEO GIỜ
                    </h3>
                    <div id="guviCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
                        <div className="carousel-inner rounded shadow-sm overflow-hidden">
                            {/* Slide 1: Phòng khách */}
                            <div className="carousel-item active">
                                <div className="position-relative d-flex justify-content-center">
                                    <div style={{ position: "relative", maxWidth: "50%" }}>
                                        <img
                                            src="/images/phong-khach.jpg"
                                            className="img-fluid rounded w-100"
                                            style={{ height: "auto" }}
                                            alt="Phòng khách"
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
                                        <h5 className="fw-bold mb-3">Phòng khách và khu vực chung</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Quét mạng nhện trên trần, tường.</li>
                                            <li>Làm sạch, lau chùi bàn ghế, tủ kệ và các bề mặt có thể tiếp cận.</li>
                                            <li>Hút bụi toàn bộ sàn nhà, các ngóc ngách.</li>
                                            <li>Lau sàn nhà, cửa, cửa sổ.</li>
                                            <li>Sắp xếp gọn gàng các vật phẩm.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2: Phòng bếp */}
                            <div className="carousel-item">
                                <div className="position-relative d-flex justify-content-center">
                                    <div style={{ position: "relative", maxWidth: "50%" }}>
                                        <img
                                            src="/images/phong-bep.jpg"
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
                                        <h5 className="fw-bold mb-3">Phòng bếp</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Lau chùi và sắp xếp lại nguyên liệu trong tủ lạnh</li>
                                            <li>Dọn dẹp, sắp xếp các đồ dùng trong nhà bếp</li>
                                            <li>Lau sạch các bề mặt ở khu vực bếp</li>
                                            <li>Cọ rửa bồn rửa bát</li>
                                            <li>Hút bụi và lau sàn nhà</li>
                                            <li>Đổ rác sau khi vệ sinh xong khu vực</li>
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
                                        <h5 className="fw-bold mb-3">Phòng vệ sinh</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Cọ rửa kỹ càng bồn rửa mặt, bồn cầu</li>
                                            <li>Lau gương cửa, tay cầm</li>
                                            <li>Vệ sinh các thiết bị/ chai lọ trong phòng tắm</li>
                                            <li>Chà sàn, tường và các vết ố bám trong phòng vệ sinh</li>
                                            <li>Đổ rác sau khi vệ sinh xong khu vực</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 4: Phòng ngủ */}
                            <div className="carousel-item">
                                <div className="position-relative d-flex justify-content-center">
                                    <div style={{ position: "relative", maxWidth: "50%" }}>
                                        <img
                                            src="/images/phong-ngu.jpg"
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
                                        <h5 className="fw-bold mb-3">Phòng ngủ</h5>
                                        <ul className="list-unstyled mb-0">
                                            <li>Lau chùi các thiết bị trong phòng: Công tắc, tay cầm, bóng đèn,..</li>
                                            <li>Vệ sinh gương, tủ áo, bàn ghế, bàn trang điểm,..</li>
                                            <li>Sắp xếp đồ đạc ngăn nắp</li>
                                            <li>Sắp xếp giường gọn gàng và thay chăn ga( nếu có yêu cầu )</li>
                                            <li>Hút bụi và lau sàn nhà</li>
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

export default MovingService;
