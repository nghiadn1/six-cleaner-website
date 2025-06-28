import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const RegularHouseService = () => {
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
            <br></br>
        <section className="py-5 bg-white">
            <div className="container">
                <h4 className="text-center fw-bold text-uppercase mb-5">Sự khác biệt giữa hai dịch vụ</h4>
                <div className="row g-4 justify-content-center">
                    {/* Cột 1: Giúp việc cố định */}
                    <div className="col-md-6">
                        <div className="position-relative border border-2 rounded shadow-sm p-4" style={{ borderColor: '#9747FF' }}>
                            {/* Icon và nhãn */}
                            <div className="text-center mb-3">
                                <img src="/images/icon10.png" alt="Lịch" style={{ width: '70px' }} />
                            </div>
                            <div className="position-absolute top-0 end-0 bg-purple text-white px-2 py-1 small fw-bold rounded-end" style={{ backgroundColor: '#9747FF' }}>
                                ỔN ĐỊNH
                            </div>
                            <h5 className="fw-bold text-center">GIÚP VIỆC CỐ ĐỊNH</h5>
                            <ul className="mt-3" style={{ fontSize: '14px' }}>
                                <li>Làm theo lịch cố định (Ví dụ: 3 buổi/tuần gói dịch vụ 1 tháng)</li>
                                <li>Gắn bó lâu dài, cùng một người làm việc</li>
                                <li>Đối tác quen việc, hiểu rõ thói quen gia đình</li>
                                <li>Dễ quản lý, không cần đặt lại mỗi lần</li>
                                <li>Chi phí ưu đãi hơn khi đặt theo gói dài hạn</li>
                                <li>Dễ yêu cầu mang tính cá nhân hóa</li>
                                <li>Phù hợp gia đình/văn phòng cần người dọn thường xuyên</li>
                            </ul>
                        </div>
                    </div>
                    {/* Cột 2: Giúp việc theo giờ */}
                    <div className="col-md-6">
                        <div className="position-relative border border-2 rounded shadow-sm p-4" style={{ borderColor: '#FF7A00' }}>
                            {/* Icon và nhãn */}
                            <div className="text-center mb-3">
                                <img src="/images/icon9.png" alt="Đồng hồ" style={{ width: '70px' }} />
                            </div>
                            <div className="position-absolute top-0 end-0 bg-orange text-white px-2 py-1 small fw-bold rounded-end" style={{ backgroundColor: '#FF7A00' }}>
                                LINH HOẠT
                            </div>
                            <h5 className="fw-bold text-center">GIÚP VIỆC THEO GIỜ</h5>
                            <ul className="mt-3" style={{ fontSize: '14px' }}>
                                <li>Đặt linh hoạt từng buổi, không theo lịch cố định (VD: Thi thoảng chỉ đặt dọn nhà 1 lần)</li>
                                <li>Mỗi buổi có thể là một đối tác khác nhau</li>
                                <li>Mỗi lần làm có thể mất thời gian hướng dẫn lại</li>
                                <li>Không ổn định, dễ trễ hoặc thiếu nhân sự</li>
                                <li>Tính phí theo từng buổi</li>
                                <li>Ít cá nhân hóa, phụ thuộc đối tác nhận đơn</li>
                                <li>Phù hợp với người cần dọn dẹp gấp, dọn ít buổi/tháng</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* Section 3: Lợi ích giúp việc cố định */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h4 className="text-center fw-bold text-uppercase mb-5">
                        LỢI ÍCH KHI THUÊ NGƯỜI DỌN DẸP NHÀ CỐ ĐỊNH
                    </h4>

                    {/* Hàng 1: 3 lợi ích đầu */}
                    <div className="row g-5 text-center mb-4">
                        <div className="col-md-4">
                            <div className="mb-3 fs-1 text-primary">⚖️</div>
                            <h6 className="fw-bold text-uppercase text-purple">ỔN ĐỊNH</h6>
                            <p>
                                Không còn cảnh thay người liên tục hay mất thời gian hướng dẫn lại từ đầu.
                                Mọi việc luôn được thực hiện đúng giờ, đúng cách, tạo sự an tâm tuyệt đối cho khách hàng.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3 fs-1 text-primary">📝</div>
                            <h6 className="fw-bold text-uppercase text-purple">TRÁCH NHIỆM</h6>
                            <p>
                                Không giống hình thức làm theo giờ, Đối tác giúp việc cố định sẽ chủ động chăm chút từng việc nhỏ,
                                chú ý đến chi tiết và luôn nỗ lực duy trì sự tin tưởng, uy tín trong suốt quá trình làm việc.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3 fs-1 text-primary">🤝</div>
                            <h6 className="fw-bold text-uppercase text-purple">GẮN BÓ</h6>
                            <p>
                                Khi làm việc ổn định và thường xuyên, Đối tác giúp việc có xu hướng gắn bó lâu dài với gia đình,
                                từ đó tạo nên sự tin tưởng và phối hợp ăn ý hơn trong công việc.
                            </p>
                        </div>
                    </div>

                    {/* Hàng 2: 2 lợi ích cuối, căn giữa */}
                    <div className="row g-5 justify-content-center text-center">
                        <div className="col-md-4">
                            <div className="mb-3 fs-1 text-primary">✅</div>
                            <h6 className="fw-bold text-uppercase text-purple">HIỂU NẾP SINH HOẠT</h6>
                            <p>
                                Đối tác quen thuộc với cách sắp xếp, vệ sinh và yêu cầu riêng của từng hộ
                                giúp công việc được thực hiện trơn tru, đồng bộ và chính xác hơn.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3 fs-1 text-primary">🚫</div>
                            <h6 className="fw-bold text-uppercase text-purple">HẠN CHẾ ĐỔI NGƯỜI</h6>
                            <p>
                                Việc thay đổi người liên tục có thể khiến công việc không đều, thiếu uy tín và mất thời gian thích nghi.
                                Gói cố định là giải pháp tối ưu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 4: Đăng ký ngay hôm nay */}
            <section className="py-5" style={{ backgroundColor: "#6FCF97" }}>
                <div className="container text-center text-white">
                    <h4 className="fw-bold mb-3">Đăng kí ngay hôm nay</h4>
                    <p className="mb-4">
                        Bạn đã sẵn sàng trải nghiệm Six Clean chưa? Bắt đầu ngay với việc đặt lịch đầu tiên của bạn.
                    </p>
                    <button className="btn btn-light text-success px-4 py-2 fw-bold rounded-pill">
                        Trải nghiệm dịch vụ
                    </button>
                </div>
            </section>
            <br></br>
        </div>
    );
};

export default RegularHouseService;
  