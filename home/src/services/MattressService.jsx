import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const MattressService = () => {
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
                    <h1 className="display-5 fw-bold"> Vệ Sinh nệm Six Clean</h1>
                    <p className="lead" style={{ fontSize: '15px' }}>
                        Những tấm thảm trong nhà hay văn phòng sau một thời gian sử dụng sẽ tích tụ bụi bẩn, vi khuẩn và mùi khó <br></br>chịu.
                        Tuy nhiên, việc tự giặt hoặc vệ sinh thảm không đúng cách có thể khiến chúng hư hỏng hoặc mất đi độ bền <br></br>đẹp ban đầu.
                        Thay vì đầu tư vào các thiết bị chuyên dụng hoặc thuê nhân công không chuyên,bạn hoàn toàn <br></br>có thể lựa chọn dịch vụ vệ sinh thảm chuyên nghiệp của Six Clean.
                        Chúng tôi cung cấp giải pháp làm sạch tối ưu,<br></br> nhanh chóng và tiết kiệm – đảm bảo thảm sạch sâu, khử khuẩn hiệu quả
                        mà không ảnh hưởng đến chất liệu, <br></br>màu sắc. Hãy để Six Clean giúp bạn giữ gìn không gian sống và làm việc luôn sạch sẽ!
                    </p>
                    <button className="btn btn-success px-4"><Link className="dropdown-item" to="/dat-dich-vu">Đặt lịch ngay</Link></button>
                </div>
            </div>

            <div className="container py-5">
                {/* Section 2: Giặt sofa chuyên nghiệp */}
                <div className="row p-4 mb-5 align-items-center">
                    <div className="col-md-6">
                        <h3 className="fw-bold" style={{ color: 'orange' }}>
                            VỆ SINH THẢM TẠI NHÀ <br />
                            CHUYÊN NGHIỆP – UY TÍN
                        </h3>
                        <p className="mt-3">
                            Giặt thảm tại nhà là một dịch vụ mà Six Clean tin rằng các gia đình và văn phòng hiện đại đều cần đến, đặc biệt khi thảm trải sàn đã qua thời gian dài sử dụng và tích tụ nhiều bụi bẩn.
                        </p>
                        <p>
                            Việc lựa chọn được một công ty cung cấp dịch vụ giặt thảm uy tín với giá cả phải chăng sẽ giúp bạn tiết kiệm rất nhiều thời gian và chi phí, đồng thời tránh được những tình huống không mong muốn do thảm bẩn gây ra.
                        </p>
                        <button className="btn fw-bold mt-2" style={{ backgroundColor: 'green', color: '#fff' }}>
                            Khám phá ngay
                        </button>
                    </div>
                    <div className="col-md-6 text-center">
                        <img
                            src="/images/ve-sinh-nem1.png"
                            alt="Giặt sofa"
                            className="img-fluid rounded"
                            style={{ maxHeight: '600px', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                {/* Section 4: Vệ sinh sofa có gì đặc biệt */}
                <div className="row pt-4 align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex gap-3">
                            <img
                                src="/images/ve-sinh-tham-2.jpg"
                                alt="Phòng ngủ"
                                className="img-fluid rounded"
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="fw-bold" style={{ color: 'orange' }}>
                            VỆ SINH NỆM TẠI SIX CLEAN CÓ GÌ ĐẶC BIỆT
                        </h4>
                        <ul className="list-unstyled row">
                            <div className="fs-5">
                                <li>✔ Đặt lịch nhanh chóng</li>
                                <li>✔ Linh hoạt thời gian, địa điểm</li>
                                <li>✔ Thiết bị hiện đại</li>
                            </div>
                            <div className="fs-5">
                                <li>✔ Chất tẩy rửa an toàn</li>
                                <li>✔ Giá cả cạnh tranh</li>
                                <li>✔ Quy trình rõ ràng, minh bạch</li>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* Section 5: Quy trình dịch vụ */}
                <div className="text-center my-5">
                    <h4 className="fw-bold" style={{ color: 'orange' }}>
                        QUY TRÌNH DỊCH VỤ VỆ SINH NỆM CỦA SIX CLEAN
                    </h4>
                    <div className="row g-4">
                        {[
                            {
                                title: "Bước 1: Tiếp nhận yêu cầu",
                                desc: "Khách hàng đặt dịch vụ vệ sinh nệm tại nhà thông qua ứng dụng, website hoặc gọi đến Hotline của Six Clean."
                            },
                            {
                                title: "Bước 2: Kiểm tra & tư vấn",
                                desc: "Nhân viên liên hệ xác nhận, tư vấn loại nệm, kích thước và mức độ bẩn để chuẩn bị thiết bị phù hợp."
                            },
                            {
                                title: "Bước 3: Hút bụi và làm sạch thô",
                                desc: "Dùng máy hút bụi công suất lớn để loại bỏ bụi bẩn, tóc, lông thú cưng trên toàn bộ bề mặt và khe nệm."
                            },
                            {
                                title: "Bước 4: Xử lý vết bẩn bằng hóa chất",
                                desc: "Phun hóa chất làm sạch chuyên dụng, xử lý cục bộ các vết bẩn cứng đầu và khử mùi hiệu quả."
                            },
                            {
                                title: "Bước 5: Giặt và hút ẩm bằng máy",
                                desc: "Dùng máy giặt nệm chuyên dụng để phun – hút kết hợp, loại bỏ hóa chất và nước bẩn trong nệm."
                            },
                            {
                                title: "Bước 6: Sấy khô & bàn giao",
                                desc: "Sấy khô bằng máy chuyên dụng hoặc quạt gió, kiểm tra chất lượng và bàn giao lại nệm sạch cho khách hàng."
                            }
                        ].map((step, i) => (
                            <div key={i} className="col-md-4">
                                <div className="p-3 rounded-4" style={{
                                    backgroundColor: "#fff",
                                    border: '3px solid #e8d5f5',
                                    boxShadow: '0 8px 20px rgba(128, 0, 194, 0.1)'
                                }}>
                                    <h6 className="fw-bold text-start">{step.title}</h6>
                                    <p className="text-start" style={{ fontSize: '14px' }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 6: Bảng giá vệ sinh thảm */}
                <section className="py-5" >
                    <div className="container">
                        <h4 className="text-center fw-bold text-uppercase text-dark mb-4">
                            Bảng giá dịch vụ vệ sinh nệm
                        </h4>
                        <div className="row justify-content-center g-4">
                            {/* SIZE S */}
                            <div className="col-6 col-md-3">
                                <div className="rounded-4 bg-white p-4 text-center h-100"
                                    style={{
                                        border: '1px solid #00C853',
                                        boxShadow: '0px 6px 20px rgba(0, 200, 83, 0.5)'
                                    }}>
                                    <div className="mb-3">
                                        <img src="/images/icon nem.png" alt="Size S" style={{ width: '60px' }} />
                                    </div>
                                    <h5 className="fw-bold text-uppercase">Nhỏ hơn 1,5m</h5>
                                    <div className="fw-bold fs-4 text-white my-3"
                                        style={{ backgroundColor: '#00C853', padding: '10px 0', borderRadius: '6px' }}>
                                        300.000đ
                                    </div>
                                    <p className="mb-0 small"> Kích thước </p>
                                    <p className="mb-0 small">➤ Kích thước &lt; 1.5m</p>
                                </div>
                            </div>

                            {/* SIZE M */}
                            <div className="col-6 col-md-3">
                                <div className="rounded-4 bg-white p-4 text-center h-100"
                                    style={{
                                        border: '1px solid #00C853',
                                        boxShadow: '0px 6px 20px rgba(0, 200, 83, 0.5)'
                                    }}>
                                    <div className="mb-3">
                                        <img src="/images/icon nem.png" alt="Size M" style={{ width: '60px' }} />
                                    </div>
                                    <h5 className="fw-bold text-uppercase">Từ 1,5m đến 1,8m</h5>
                                    <div className="fw-bold fs-4 text-white my-3"
                                        style={{ backgroundColor: '#00C853', padding: '10px 0', borderRadius: '6px' }}>
                                        350.000đ
                                    </div>
                                    <p className="mb-0 small"> Kích thước </p>
                                    <p className="mb-0 small">➤ Kích thước 1.5m - 2m</p>
                                </div>
                            </div>

                            {/* SIZE L */}
                            <div className="col-6 col-md-3">
                                <div className="rounded-4 bg-white p-4 text-center h-100"
                                    style={{
                                        border: '1px solid #00C853',
                                        boxShadow: '0px 6px 20px rgba(0, 200, 83, 0.5)'
                                    }}>
                                    <div className="mb-3">
                                        <img src="/images/icon nem.png" alt="Size L" style={{ width: '60px' }} />
                                    </div>
                                    <h5 className="fw-bold text-uppercase">Lớn hơn 2m</h5>
                                    <div className="fw-bold fs-4 text-white my-3"
                                        style={{ backgroundColor: '#00C853', padding: '10px 0', borderRadius: '6px' }}>
                                        400.000đ
                                    </div>
                                    <p className="mb-0 small"> Kích thước </p>
                                    <p className="mb-0 small">➤ Kích thước 2m - 2.5m</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MattressService;
