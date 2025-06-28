import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

// Gắn đúng tên cookie và header Laravel yêu cầu
instance.defaults.xsrfCookieName = 'XSRF-TOKEN';
instance.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

// ✅ Tự động gắn token vào header nếu có trong cookie
instance.interceptors.request.use((config) => {
    const xsrfToken = getCookie('XSRF-TOKEN');
    if (xsrfToken) {
        config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrfToken);
    }
    return config;
});

// Hàm lấy cookie theo tên
function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}

export const logout = async () => {
    await axios.post("/api/auth/logout");
};
  
export default instance;
