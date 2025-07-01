import React, { useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Clock, LogOut, User, ClipboardList, DollarSign } from 'lucide-react';


const EmployeeProfile = () => {
    
    const [ setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

   

    const employee = {
        name: 'Trần Minh Quân',
        gender: 'Nam',
        dob: '05/10/2004',
        phone: '0987 654 321',
        email: 'quantran@gmail.com',
        position: 'Nhân viên dọn dẹp',
        address: '123 Nguyễn Văn Linh, Đà Nẵng',
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
                        backgroundColor: '#232531',
                        border: '1px solid',
                        borderRadius: '5px',
                        color: '#2E4ECB',
                    }}>
                        Nhân viên
                    </span>
                </div>
                <div className="mb-3 text-muted fw-semibold small">BÁO CÁO</div>
                <div className="d-flex flex-column gap-2 mb-3">
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2" onClick={() => navigate('/cham-cong')}>
                        <Clock size={16} /> Chấm công
                    </Button>
                    <Button variant="light" className="text-start w-100 d-flex align-items-center gap-2">
                        <DollarSign size={16} /> Thu nhập
                    </Button>
                    <Button variant="outline-primary" className="text-start w-100 d-flex align-items-center gap-2 active">
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
                        <i className="but rounded-pill" style={{ width: '30px' }}>
                            <i className="bi bi-bell fs-5" style={{ padding: '5px' }}></i>
                        </i>
                        <div className="d-flex align-items-center gap-2">
                            <img src="https://i.ibb.co/99z3F7Wr/avatar.jpg" alt="avatar" className="rounded-circle border border-2" width={36} />
                            <span className="fw-semibold">Trần Minh Quân</span>
                        </div>
                    </div>
                </div> */}

                {/* Profile Form */}
                <div className="flex-grow-1 p-4">
                    <Card className="shadow-sm rounded-4 p-4">
                        <Card.Title className="mb-4 fw-bold fs-4">Hồ sơ nhân viên</Card.Title>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control type="text" value={employee.name} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Giới tính</Form.Label>
                                <Form.Control type="text" value={employee.gender} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ngày sinh</Form.Label>
                                <Form.Control type="text" value={employee.dob} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="text" value={employee.phone} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={employee.email} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Chức vụ</Form.Label>
                                <Form.Control type="text" value={employee.position} readOnly />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control type="text" value={employee.address} readOnly />
                            </Form.Group>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;
