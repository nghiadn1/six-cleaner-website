import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
const PaymentPage = () => {
    const [discount, setDiscount] = useState('');
    const [voucher, setVoucher] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const total = 233000;

    // Dummy data hiển thị
    const position = 'Đà Nẵng, Quận Hải Châu';
    const customer = 'Nguyễn Lê Tiến Đạt';
    const workingTime = '20/06/2025 lúc 09:00';
    const jobDetail = 'Dọn dẹp 2 phòng, gói 1 tháng';

    return (
        <div className="font-sans">
            <Container className="my-5">
                <h4 className="text-center fw-bold mb-4">ĐẶT LỊCH DỊCH VỤ</h4>

                {/* Tiến trình */}
                <div className="d-flex justify-content-center mb-5">
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-light border text-dark fw-bold" style={{ width: 35, height: 35, lineHeight: '35px' }}>1</div>
                        <div>Thông tin</div>
                    </div>
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-light border text-dark fw-bold" style={{ width: 35, height: 35, lineHeight: '35px' }}>2</div>
                        <div>Dịch vụ</div>
                    </div>
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-dark text-white fw-bold" style={{ width: 35, height: 35, lineHeight: '35px' }}>3</div>
                        <div>Thanh toán</div>
                    </div>
                </div>

                {/* Thông tin thanh toán */}
                <div className="p-4 bg-white shadow rounded mx-auto border" style={{ maxWidth: '850px' }}>
                    <h5 className="fw-bold mb-4 text-center">Thông tin thanh toán</h5>

                    {/* Vị trí & tên */}
                    <Row className="mb-4">
                        <Col md={6}>
                            <div className="d-flex align-items-center border rounded p-2 bg-light">
                                <FaMapMarkerAlt className="me-2 text-success" />
                                <div>{position}</div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex align-items-center border rounded p-2 bg-light">
                                <FaUser className="me-2 text-success" />
                                <div>{customer}</div>
                            </div>
                        </Col>
                    </Row>

                    {/* Thời gian & mô tả */}
                    <Row className="mb-4">
                        <Col md={6}>
                            <div className="border rounded p-2 bg-light">{workingTime}</div>
                        </Col>
                        <Col md={6}>
                            <div className="border rounded p-2 bg-light">{jobDetail}</div>
                        </Col>
                    </Row>

                    {/* Giảm giá & voucher */}
                    <Row className="mb-4">
                        <Col md={6}>
                            <Form.Control
                                placeholder="Nhập mã giảm giá"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Control
                                placeholder="Áp dụng voucher"
                                value={voucher}
                                onChange={(e) => setVoucher(e.target.value)}
                            />
                        </Col>
                    </Row>

                    {/* Hình thức thanh toán */}
                    <div className="mb-4">
                        <label className="fw-bold mb-2">Hình thức thanh toán</label>
                        <div className="d-flex gap-4">
                            <Form.Check
                                type="radio"
                                label="Tiền mặt"
                                name="payment"
                                checked={paymentMethod === 'cash'}
                                onChange={() => setPaymentMethod('cash')}
                            />
                            <Form.Check
                                type="radio"
                                label={<span><img src="https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg" alt="momo" width="20" className="me-1" />Ví MoMo</span>}
                                name="payment"
                                checked={paymentMethod === 'momo'}
                                onChange={() => setPaymentMethod('momo')}
                            />
                        </div>
                    </div>

                    {/* Tổng cộng */}
                    <div className="text-end fw-bold mb-3">
                        Tổng cộng: {total.toLocaleString('vi-VN')}đ
                    </div>

                    {/* Nút điều hướng */}
                    <div className="d-flex justify-content-between">
                        <Button variant="outline-success"><Link className="dropdown-item" to="/chi-tiet-dich-vu-don-nha">Quay lại</Link></Button>
                        <Button variant="success">Đặt lịch</Button>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default PaymentPage;
