import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Badge, Form } from 'react-bootstrap';
import { Clock, List, Search, LogOut, User, ClipboardList, Layers, DollarSign } from 'lucide-react';
import './Timekeeping.css';
import { useNavigate } from 'react-router-dom';

const Timekeeping = () => {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);
    const [status, setStatus] = useState(null);
    const [showTimes, setShowTimes] = useState(false);
    const [history, setHistory] = useState([
        {
            date: '27/06/2025',
            checkIn: '07:45',
            checkOut: '17:00',
            status: 'Đúng giờ'
        },
        {
            date: '26/06/2025',
            checkIn: '07:35',
            checkOut: '17:00',
            status: 'Đi muộn'
        }
    ]);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('vi-VN');
    };

    const handleCheckInOut = () => {
        const now = new Date();
        const time = formatTime(now);

        if (!checkInTime) {
            setCheckInTime(time);
            setShowTimes(true);
            const hour = now.getHours();
            const minute = now.getMinutes();
            const status = hour < 8 || (hour === 8 && minute === 0) ? 'Đúng giờ' : 'Đi muộn';
            setStatus(status);
        } else if (!checkOutTime) {
            setCheckOutTime(time);
        } else {
            const newRecord = {
                date: formatDate(new Date()),
                checkIn: checkInTime,
                checkOut: checkOutTime,
                status: status
            };
            setHistory([newRecord, ...history]);
            setCheckInTime(null);
            setCheckOutTime(null);
            setStatus(null);
            setShowTimes(false);
        }
    };

    return (
        <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'system-ui' }}>
            {/* Sidebar */}
            {/* <div className="d-flex flex-column bg-white shadow-sm p-3" style={{ width: '250px' }}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <img src="/images/logo.png" alt="logo" width={70} height={40} />
                    <span className="fs-5" style={{
                                                
                                                width: '110px',
                                                height: '30px',
                                                lineHeight: '25px',
                                                textAlign: 'center',
                                                backgroundColor: ' #232531',
                                                border: '1px solid',
                                                borderRadius: '5px',
                                                color:'#2E4ECB',

                                                }}>
                            Nhân viên</span>
                </div> */}
                {/* <div className="text-center mb-4">
                    <div className="d-flex flex-column align-items-center">
                        <img src="https://i.ibb.co/99z3F7Wr/avatar.jpg" alt="avatar" className="rounded-circle border border-2 border-primary mb-2" width={64} />
                        <div className="fw-bold">Trần Minh Quân</div>
                        <small className="text-muted">Nhân viên</small>
                    </div>
                </div> */}
                {/* <div className="mb-3 text-muted fw-semibold small">MAIN</div>
                <div className="d-flex flex-column gap-2 mb-3">
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2">
                        <ClipboardList size={16} /> Tổng quan
                    </Button>
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2">
                        <DollarSign size={16} /> Doanh thu
                    </Button>
                </div> */}
                {/* <div className="mb-3 text-muted fw-semibold small">BÁO CÁO</div>
                <div className="d-flex flex-column gap-2 mb-3">
                    <Button variant="outline-primary" className="text-start w-100 d-flex align-items-center gap-2 active">
                        <Clock size={16} /> Chấm công
                    </Button>
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2">
                        <DollarSign size={16} /> Thu nhập
                    </Button>
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2" onClick={() => navigate('/ho-so-nhan-vien')}>
                        <User size={16} /> Hồ sơ nhân viên
                    </Button>
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2">
                        <ClipboardList size={16} /> Lịch sử đơn hàng
                    </Button>
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2">
                        <ClipboardList size={16} /> Quản lý đơn hàng
                    </Button>
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2">
                        <ClipboardList size={16} /> Báo cáo vấn đề
                    </Button>
                </div>
                <div className="mt-auto">
                    <Button variant="outline-danger" className="w-100 d-flex align-items-center gap-2">
                        <LogOut size={16} /> Đăng xuất
                    </Button>
                </div>
            </div> */}

            {/* Main content */}
            <div className="flex-grow-1 d-flex flex-column">
                {/* Top Navbar */}
                {/* <div className="w-100 bg-white shadow-sm px-4 py-2 d-flex align-items-center justify-content-between">
                    <div className="text-muted fw-semibold">
                        <i className="bi bi-calendar-event me-2"></i> {formatDate(currentTime)}
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <i className="but rounded-pill" style={{ width: '30px' }}> <i className=' bi bi-bell fs-5' style={{ padding:'5px' }}></i></i>
                        <div className="d-flex align-items-center gap-2">
                            <img src="https://i.ibb.co/99z3F7Wr/avatar.jpg" alt="avatar" className="rounded-circle border border-2" width={36} />
                            <span className="fw-semibold">Trần Minh Quân</span>
                        </div>
                    </div>
                </div> */}

                {/* Page content */}
                <div className="p-4">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <Card className="shadow-sm rounded-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                <Card.Header className="bg-white border-0 fw-semibold d-flex align-items-center">
                                    <List className="me-2" /> Lịch sử chấm công
                                </Card.Header>
                                <Table bordered hover className="mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Ngày làm</th>
                                            <th>Giờ vào</th>
                                            <th>Giờ ra</th>
                                            <th>Tình trạng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {history.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.date}</td>
                                                <td>{item.checkIn}</td>
                                                <td>{item.checkOut}</td>
                                                <td>
                                                    <Badge bg={item.status === 'Đúng giờ' ? 'success' : 'warning'} text={item.status === 'Đúng giờ' ? undefined : 'dark'}>
                                                        {item.status}
                                                    </Badge>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <Card className="shadow-sm rounded-4 text-center">
                                <Card.Body>
                                    
                                    <p className="mb-1">Chức vụ: Nhân viên dọn dẹp</p>
                                    <Clock size={32} className="mb-2 text-primary" />
                                    <h2 className="fw-bold">{formatTime(currentTime)}</h2>
                                    <p className="mb-3">Chấm công trước 8:00</p>
                                    {showTimes && (
                                        <div className="mb-3">
                                            <div>Giờ vào: <strong>{checkInTime || '--:--'}</strong></div>
                                            <div>Giờ ra: <strong>{checkOutTime || '--:--'}</strong></div>
                                        </div>
                                    )}
                                    <Button variant="primary" className="rounded-pill px-4" onClick={handleCheckInOut}>
                                        {checkInTime && !checkOutTime ? 'Giờ ra' : checkOutTime ? 'Kết thúc ca' : 'Chấm công'}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>


                        {/* Lịch sử công việc */}
                        <div className="col-lg-12">
                            <Card className="shadow-sm rounded-4">
                                <Card.Header className="bg-white border-0 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center fw-semibold">
                                        <List className="me-2" /> Lịch sử công việc
                                    </div>
                                    <Form className="d-flex">
                                        <Form.Control type="search" placeholder="Tìm kiếm" className="me-2 rounded-pill" style={{ transform: 'translateX(60px)', width:'390px' }} />
                                        <Button variant="outline-secondary" className="but rounded-pill" 
                                                style={{ padding: '15px', height: '45px', transform: 'translateX(0px)' }}>
                                            <Search size={20} style={{ transform:'translateY(-7px)'}} />
                                        </Button>
                                    </Form>
                                </Card.Header>
                                <Table striped bordered hover className="mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th>STT</th>
                                            <th>Công việc</th>
                                            <th>Ngày</th>
                                            <th>Địa điểm</th>
                                            <th>Giá</th>
                                            <th>Đánh giá</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[{ id: 1, job: 'Dọn dẹp', date: '24/06/2025', place: 'Sơn Trà', price: '140.000', rating: 'Tốt' },
                                        { id: 2, job: 'Dọn dẹp', date: '25/06/2025', place: 'Thanh Khê', price: '125.000', rating: 'Bình thường' },
                                        { id: 3, job: 'Dọn dẹp', date: '27/06/2025', place: 'Thanh Khê', price: '95.000', rating: 'Xuất sắc' }].map((item, i) => (
                                            <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>{item.job}</td>
                                                <td>{item.date}</td>
                                                <td>{item.place}</td>
                                                <td>{item.price}</td>
                                                <td>{item.rating}</td>
                                                <td><Button size="sm" variant="outline-primary" className="rounded-pill px-3">Chi tiết</Button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timekeeping;
