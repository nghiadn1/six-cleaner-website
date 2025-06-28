import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const newsArticles = [
    {
        id: 1,
        title: "6 bí quyết giữ nhà luôn sạch sẽ dù bận rộn",
        excerpt: "Khám phá những mẹo đơn giản giúp duy trì không gian sống sạch sẽ, ngăn nắp dù lịch trình hàng ngày của bạn dày đặc...",
        image: "/images/anh1.jpg",
        date: "2024-01-15",
        author: "Admin",
        readTime: "5 phút",
        category: "Mẹo vặt",
    },
    {
        id: 2,
        title: "Six Cleaner mở rộng dịch vụ tại Đà Nẵng",
        excerpt: "Chúng tôi vui mừng thông báo về việc mở rộng dịch vụ tại thành phố Đà Nẵng, đáp ứng nhu cầu ngày càng tăng của khách hàng...",
        image: "/images/anh2.jpg",
        date: "2024-01-10",
        author: "Admin",
        readTime: "3 phút",
        category: "Tin tức",
    },
    {
        id: 3,
        title: "Cách vệ sinh nệm hiệu quả tại nhà",
        excerpt: "Nệm là nơi tích tụ nhiều bụi bẩn và vi khuẩn nhất trong nhà. Hãy cùng Six Cleaner tìm hiểu cách vệ sinh nệm đúng cách...",
        image: "/images/anh3.jpg",
        date: "2024-01-05",
        author: "Admin",
        readTime: "7 phút",
        category: "Hướng dẫn",
    },
    {
        id: 4,
        title: "Tuyển dụng nhân viên vệ sinh tại TP.HCM",
        excerpt: "Six Cleaner đang tìm kiếm những ứng viên tiềm năng để gia nhập đội ngũ nhân viên vệ sinh chuyên nghiệp tại TP.HCM...",
        image: "/images/anh4.jpg",
        date: "2023-12-28",
        author: "HR Manager",
        readTime: "4 phút",
        category: "Tuyển dụng",
    },
    {
        id: 5,
        title: "5 lợi ích của việc thuê dịch vụ vệ sinh chuyên nghiệp",
        excerpt: "Khám phá những lợi ích không ngờ khi sử dụng dịch vụ vệ sinh chuyên nghiệp thay vì tự làm tại nhà dành cho bạn...",
        image: "/images/anh5.jpg",
        date: "2023-12-20",
        author: "Admin",
        readTime: "6 phút",
        category: "Dịch vụ",
    },
    {
        id: 6,
        title: "Chương trình khuyến mãi đặc biệt nhân dịp cuối năm",
        excerpt: "Six Cleaner triển khai chương trình ưu đãi lớn nhân dịp cuối năm, giảm giá đến 30% cho các dịch vụ vệ sinh...",
        image: "/images/anh6.jpg",
        date: "2023-12-15",
        author: "Marketing",
        readTime: "3 phút",
        category: "Khuyến mãi",
    },
];

const News = () => {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Container className="flex-grow-1 py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Tin tức & Cập nhật</h2>
                    <p className="text-muted">Cập nhật những tin tức mới nhất về Six Cleaner và các chương trình hấp dẫn</p>
                </div>

                <Row className="g-4">
                    {newsArticles.map((article) => (
                        <Col key={article.id} md={6} lg={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={article.image} alt={article.title} />
                                <Card.Body className="d-flex flex-column">
                                    <Badge bg="secondary" className="mb-2">{article.category}</Badge>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text className="text-muted">{article.excerpt}</Card.Text>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <small className="text-muted">{article.author} • {article.readTime}</small>
                                        <Button href={`/news/${article.id}`} variant="outline-success" size="sm">Đọc thêm</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default News;
