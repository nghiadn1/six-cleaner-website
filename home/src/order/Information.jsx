import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';

const Information = () => {
    const [selectedService, setSelectedService] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!selectedService) {
            alert('Vui lòng chọn dịch vụ!');
            return;
        }
        navigate(`/house-service-detail?service=${selectedService}`);
    };

    return (
        <div className="font-sans">
            <Container className="my-5">
                <h4 className="text-center fw-bold mb-4">ĐẶT LỊCH DỊCH VỤ</h4>

                {/* ✅ Tiến trình các bước */}
                <div className="d-flex justify-content-center mb-5">
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-dark text-white fw-bold"
                            style={{ width: 35, height: 35, lineHeight: '35px', transform: 'translateX(15px)' }}>
                            1
                        </div>
                        <div>Thông tin</div>
                    </div>
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-light border text-dark fw-bold"
                            style={{ width: 35, height: 35, lineHeight: '35px', transform: 'translateX(15px)' }}>
                            2
                        </div>
                        <div>Dịch vụ</div>
                    </div>
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-light border text-dark fw-bold"
                            style={{ width: 35, height: 35, lineHeight: '35px', transform: 'translateX(15px)' }}>
                            3
                        </div>
                        <div>Thanh toán</div>
                    </div>
                </div>

                {/* Form */}
                <div className="p-4 bg-white shadow rounded mx-auto border" style={{ maxWidth: '800px' }}>
                    <h5 className="fw-bold mb-4">Thông tin khách hàng</h5>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" placeholder="Nhập họ và tên của bạn" />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="tel" placeholder="Nhập số điện thoại của bạn" />
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Đơn hàng theo dõi sẽ được gửi qua Email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập địa chỉ chi tiết của bạn" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Select>
                                    <option>Đà Nẵng</option>
                                </Form.Select>
                            </Col>
                            <Col md={4}>
                                <Form.Select>
                                    <option>Chọn quận</option>
                                    <option>Quận Hải Châu</option>
                                    <option>Quận Thanh Khê</option>
                                    <option>Quận Liên Chiểu</option>
                                    <option>Quận Hòa Vang</option>
                                    <option>Quận Sơn Trà</option>
                                </Form.Select>
                            </Col>
                            <Col md={4}>
                                <Form.Select>
                                    <option>Chọn Phường/Xã</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Form.Group className="mb-4">
                            <Form.Label>Dịch vụ cần cung cấp</Form.Label>
                            <Form.Select
                                value={selectedService}
                                onChange={(e) => setSelectedService(e.target.value)}
                            >
                                <option value="">-- Chọn dịch vụ --</option>
                                <option value="regularHouse">Dịch vụ giúp việc (Cố định)</option>
                                <option value="office">Dọn dẹp văn phòng</option>
                                <option value="washing">Vệ sinh máy giặt</option>
                                <option value="mattress">Vệ sinh nệm</option>
                                <option value="carpet">Vệ sinh thảm</option>
                                <option value="moving">Dịch vụ chuyển nhà</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="text-end">
                            <Button variant="success" className="px-4" onClick={handleContinue}>
                                Tiếp tục
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Information;
