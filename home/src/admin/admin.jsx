import React from "react";
import { Card, Table, Button } from "react-bootstrap";
import { BarChart3, Users, CheckSquare } from "lucide-react";
import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="d-flex admin-container">
      {/* Sidebar trái */}
      <div className="sidebar p-4 text-white">
        <h5 className="fw-bold mb-4">Admin Panel</h5>
        <Button variant="dark" className="w-100 text-start mb-2">
          Thống kê
        </Button>
        <Button variant="dark" className="w-100 text-start mb-2">
          Nhân viên
        </Button>
        <Button variant="dark" className="w-100 text-start mb-2">
          Khách hàng
        </Button>
        <Button variant="dark" className="w-100 text-start mb-2">
          Đơn hàng
        </Button>
        <Button variant="dark" className="w-100 text-start mb-2">
          Phân quyền
        </Button>
      </div>

      {/* Nội dung phải */}
      <div className="content p-4 w-100">
        <h4 className="fw-bold mb-4">Tổng quan</h4>
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <Card className="stat-card text-white bg-primary">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <BarChart3 className="me-3" />
                  <div>
                    <h6>Tổng đơn hàng</h6>
                    <h4>120</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="stat-card text-white bg-success">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <Users className="me-3" />
                  <div>
                    <h6>Tổng nhân viên</h6>
                    <h4>12</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="stat-card text-white bg-warning">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <CheckSquare className="me-3" />
                  <div>
                    <h6>Đơn đã hoàn thành</h6>
                    <h4>98</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Danh sách đơn hàng */}
        <Card className="shadow-sm">
          <Card.Header className="fw-semibold">Danh sách đơn hàng</Card.Header>
          <Table responsive hover className="mb-0">
            <thead>
              <tr>
                <th>STT</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Dịch vụ</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 1,
                  name: "Nguyễn Văn A",
                  date: "30/06/2025",
                  service: "Dọn dẹp",
                  price: "150.000đ",
                  status: "Hoàn thành",
                },
                {
                  id: 2,
                  name: "Trần Thị B",
                  date: "29/06/2025",
                  service: "Giặt nệm",
                  price: "300.000đ",
                  status: "Đang xử lý",
                },
              ].map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.date}</td>
                  <td>{order.service}</td>
                  <td>{order.price}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === "Hoàn thành"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <Button size="sm" variant="outline-primary">
                      Chi tiết
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
