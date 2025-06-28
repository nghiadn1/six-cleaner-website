import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { bookingOptions } from '../services/bookingOptions';
import { Container } from 'react-bootstrap';

const HouseServiceDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const serviceKey = searchParams.get('service');

    const service = bookingOptions[serviceKey];

    const [selectedDuration, setSelectedDuration] = useState(null);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedHour, setSelectedHour] = useState('00');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [note, setNote] = useState('');

    useEffect(() => {
        if (!service) {
            console.warn('Dịch vụ không hợp lệ');
        }
    }, [service]);

    const totalPrice = (() => {
        if (selectedPackage?.price) return selectedPackage.price;
        if (selectedDuration?.price) return selectedDuration.price;
        return 0;
    })();

    const handleContinue = () => {
        navigate('/chi-tiet-thanh-toan');
    };

    if (!service) {
        return <div className="text-center mt-5">Dịch vụ không hợp lệ hoặc không tồn tại.</div>;
    }

    return (
        <div className="font-sans">
            <Container className="my-5">
                <h4 className="text-center fw-bold mb-4">ĐẶT LỊCH DỊCH VỤ</h4>

                {/* ✅ Tiến trình 3 bước */}
                <div className="d-flex justify-content-center mb-5">
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-light border text-dark fw-bold"
                            style={{ width: 35, height: 35, lineHeight: '35px', transform: 'translateX(15px)' }}>
                            1
                        </div>
                        <div>Thông tin</div>
                    </div>
                    <div className="text-center mx-3">
                        <div className="rounded-circle bg-dark text-white fw-bold"
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

                <div className="bg-white border rounded p-4 shadow-sm">
                    <div className="row mb-4">
                        {service.durations?.length > 0 && (
                            <div className="col-lg-6 mb-3">
                                <h6 className="fw-bold text-secondary">{service.optionLabel || 'Thời lượng'}</h6>
                                <p className="text-muted small">{service.optionDescription || 'Ước lượng thời gian cần dọn dẹp'}</p>
                                <div className="d-flex gap-2 flex-wrap">
                                    {service.durations.map((option, index) => (
                                        <button
                                            key={index}
                                            className={`btn ${selectedDuration === option ? 'btn-success' : 'btn-outline-secondary'}`}
                                            onClick={() => setSelectedDuration(option)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {service.packages?.length > 0 && (
                            <div className="col-lg-6 mb-3">
                                <h6 className="fw-bold text-secondary">{service.packageLabel || 'Loại gói'}</h6>
                                <p className="text-muted small">{service.packageDescription || 'Chọn gói phù hợp'}</p>
                                <div className="d-flex gap-2 flex-wrap">
                                    {service.packages.map((option, index) => (
                                        <button
                                            key={index}
                                            className={`btn ${selectedPackage === option ? 'btn-success' : 'btn-outline-secondary'}`}
                                            onClick={() => setSelectedPackage(option)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <h6 className="fw-bold text-secondary">Thời gian làm việc</h6>
                            <input
                                type="date"
                                className="form-control"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <h6 className="fw-bold text-secondary">Chọn giờ làm</h6>
                            <div className="d-flex gap-2">
                                <input
                                    type="number"
                                    className="form-control"
                                    style={{ maxWidth: '80px' }}
                                    value={selectedHour}
                                    onChange={(e) => setSelectedHour(e.target.value)}
                                />
                                <input
                                    type="number"
                                    className="form-control"
                                    style={{ maxWidth: '80px' }}
                                    value={selectedMinute}
                                    onChange={(e) => setSelectedMinute(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h6 className="fw-bold text-secondary">Ghi chú</h6>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Nhập nội dung"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>

                    <div className="text-end mt-4">
                        <h5 className="mb-3 fw-bold text-dark">Tổng cộng: {totalPrice.toLocaleString()}đ</h5>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-outline-success">Quay lại</button>
                        <button className="btn btn-success px-4" onClick={handleContinue}>Tiếp tục</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HouseServiceDetail;
