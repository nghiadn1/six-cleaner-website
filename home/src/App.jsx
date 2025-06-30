import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import About from "./pages/About";
import Partner from "./pages/Partner";
import News from "./pages/News";
import Support from "./pages/Support";
import HouseService from "./services/HouseService";
import RegularHouseService from "./services/RegularHouseService";
import OfficeService from "./services/OfficeService";
import MovingService from "./services/MovingService";
import WashingService from "./services/WashingService";
import CarpetService from "./services/CarpetService";
import MattressService from "./services/MattressService";
import Information from "./order/Information";
import HouseServiceDetail from "./order/HouseServiceDetail";
import PaymentPage from "./order/PaymentPage";
import BookingHistory from "./History/BookingHistory.jsx";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dang-ky" element={<RegisterPage />} />
        <Route path="/dang-nhap" element={<LoginPage />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/dang-ki-doi-tac" element={<Partner />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/ho-tro" element={<Support />} />
        <Route path="/giup-viec-theo-gio" element={<HouseService />} />
        <Route path="/giup-viec-co-dinh" element={<RegularHouseService />} />
        <Route path="/don-dep-van-phong" element={<OfficeService />} />
        <Route path="/chuyen-nha" element={<MovingService />} />
        <Route path="/ve-sinh-may-giat" element={<WashingService />} />
        <Route path="/ve-sinh-tham" element={<CarpetService />} />
        <Route path="/ve-sinh-nem" element={<MattressService />} />
        <Route path="/dat-dich-vu" element={<Information />} />
        <Route path="/house-service-detail" element={<HouseServiceDetail />} />
        <Route path="/chi-tiet-thanh-toan" element={<PaymentPage />} />
        <Route path="/lich-su-dat-lich" element={<BookingHistory />} />
        <Route path="/ho-so-ca-nhan" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
