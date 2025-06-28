import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Accordion } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Support = () => {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form:", contactForm);
        setIsSubmitted(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm((prev) => ({ ...prev, [name]: value }));
    };

    const faqs = [
        {
            question: "Six Cleaner cung cấp những dịch vụ nào?",
            answer: "Six Cleaner cung cấp nhiều dịch vụ vệ sinh chuyên nghiệp như giúp việc nhà, dọn dẹp văn phòng, vệ sinh thảm, nệm, máy giặt, chuyển nhà và nhiều hơn nữa.",
        },
        {
            question: "Làm thế nào để đặt dịch vụ?",
            answer: "Bạn có thể đặt dịch vụ trực tiếp qua website hoặc gọi điện đến số hotline 1900 1234 để được tư vấn nhanh chóng.",
        },
        {
            question: "Tôi cần đặt lịch giúp việc gấp trong ngày thì có được không?",
            answer:   "Six Cleaner có hỗ trợ đặt lịch gấp trong ngày nếu còn nhân viên trống. Bạn nên gọi hotline để được hỗ trợ nhanh nhất.",      
        },
        {
            question: "Tôi có thể yêu cầu một nhân viên cố định hàng tuần không?",
            answer:   "Hoàn toàn được. Six Cleaner hỗ trợ khách hàng đặt lịch với nhân viên cố định, tùy theo thời gian làm việc và sự sắp xếp phù hợp.",
        },
        {
            question: "Nếu tôi không hài lòng với chất lượng dịch vụ thì sao?",
            answer:
                "Bạn có thể phản hồi trực tiếp qua hotline hoặc email. Chúng tôi sẽ kiểm tra và hoàn tiền hoặc sắp xếp làm lại nếu phát hiện sai sót từ phía nhân viên.",
        },
        {
            question: "Tôi có thể hủy hoặc thay đổi lịch đã đặt không?",
            answer:"Bạn có thể hủy hoặc thay đổi lịch trước ít nhất 3 tiếng mà không bị tính phí. Việc thay đổi trễ có thể phát sinh phụ phí.",
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <main className="flex-grow-1">
                {/* Hero */}
                <section className="py-5 text-center bg-success text-white">
                    <Container>
                        <h1 className="display-5 fw-bold">Hỗ trợ khách hàng</h1>
                        <p className="lead">Chúng tôi luôn sẵn sàng hỗ trợ bạn với mọi thắc mắc và yêu cầu.</p>
                    </Container>
                </section>

                {/* Form liên hệ */}
                <section className="py-5 bg-white">
                    <Container>
                        <Row className="g-4">
                            {/* Gửi tin nhắn */}
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <Card.Title className="text-center fw-bold">Gửi tin nhắn cho chúng tôi</Card.Title>
                                        <Card.Text className="text-center text-muted mb-4">Điền thông tin để được hỗ trợ tốt nhất</Card.Text>
                                        {isSubmitted ? (
                                            <div className="text-center">
                                                <FaCheckCircle className="text-success mb-3" size={48} />
                                                <h4 className="fw-bold">Đã gửi thành công!</h4>
                                                <p>Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                                                <Button variant="outline-success" onClick={() => setIsSubmitted(false)}>Gửi tin khác</Button>
                                            </div>
                                        ) : (
                                            <Form onSubmit={handleSubmit}>
                                                <Row className="mb-3">
                                                    <Col sm={12} md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Họ và tên</Form.Label>
                                                            <Form.Control name="name" value={contactForm.name} onChange={handleInputChange} required />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={12} md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Email</Form.Label>
                                                            <Form.Control name="email" type="email" value={contactForm.email} onChange={handleInputChange} required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Col sm={12} md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Điện thoại</Form.Label>
                                                            <Form.Control name="phone" value={contactForm.phone} onChange={handleInputChange} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={12} md={6}>
                                                        <Form.Group>
                                                            <Form.Label>Chủ đề</Form.Label>
                                                            <Form.Control name="subject" value={contactForm.subject} onChange={handleInputChange} required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Nội dung</Form.Label>
                                                    <Form.Control as="textarea" rows={4} name="message" value={contactForm.message} onChange={handleInputChange} required />
                                                </Form.Group>
                                                <Button type="submit" className="w-100 btn-success">Gửi tin nhắn</Button>
                                            </Form>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                            {/* FAQ */}
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h5 className="text-center fw-bold mb-4">Câu hỏi thường gặp</h5>
                                        <Accordion defaultActiveKey="0" flush>
                                            {faqs.map((faq, index) => (
                                                <Accordion.Item eventKey={index.toString()} key={index}>
                                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                                    <Accordion.Body>{faq.answer}</Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                 {/* Thông tin liên hệ */}
                <section className="py-5">
                    <section className="text-center ">
                        <Container>
                            <h1 className="display-5 fw-bold">Thông tin liên hệ</h1>
                        </Container>
                    </section>
                    <Container>
                        <Row className="g-4 text-center">
                            {[
                                { icon: <FaPhone size={28} />, title: "Điện thoại", detail: "1900 1234", note: "T2 - CN: 8:00 - 20:00" },
                                { icon: <FaEnvelope size={28} />, title: "Email", detail: "support@sixcleaner.vn", note: "Phản hồi trong 24h" },
                                { icon: <FaMapMarkerAlt size={28} />, title: "Địa chỉ", detail: "123 Nguyễn Văn Linh", note: "Hải Châu, Đà Nẵng" },
                            ].map((info, i) => (
                                <Col md={4} key={i}>
                                    <Card className="p-4 shadow-sm border-0 h-100">
                                        <div className="mx-auto bg-success bg-opacity-10 rounded-circle p-3 text-success mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            {info.icon}
                                        </div>
                                        <h5 className="fw-bold">{info.title}</h5>
                                        <p className="mb-1">{info.detail}</p>
                                        <small className="text-muted">{info.note}</small>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </main>
        </div>
    );
};

export default Support;
