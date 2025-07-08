<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\Admin\UserController;
use App\Http\Controllers\API\ProfileController;
use App\Http\Controllers\API\LocationController;

// Nhóm route xác thực người dùng
Route::prefix('auth')->controller(AuthController::class)->group(function () {
    Route::post('/register', 'register');           // Đăng ký
    Route::post('/login', 'login');                 // Đăng nhập
    Route::post('/send-otp', 'sendOtp');            // Gửi mã OTP
    Route::post('/verify-otp', 'verifyOtp');        // Xác minh mã OTP
    Route::post('/reset-password', 'resetPassword');// Đặt lại mật khẩu
    Route::middleware('auth:sanctum')->post('/logout', 'logout'); // Đăng xuất
});



Route::middleware(['auth:sanctum', 'role:admin'])->prefix('admin/users')->group(function () {
    Route::get('/', [UserController::class, 'index']);         // Danh sách người dùng
    Route::post('/', [UserController::class, 'store']);        // Thêm người dùng
    Route::get('/{id}', [UserController::class, 'show']);      // Chi tiết
    Route::put('/{id}', [UserController::class, 'update']);    // Cập nhật
    Route::delete('/{id}', [UserController::class, 'destroy']); // Xoá
});



Route::middleware(['auth:sanctum'])->prefix('profile')->group(function () {
    Route::get('/', [ProfileController::class, 'show']);
    Route::post('/update', [ProfileController::class, 'update']); // ✅ sửa từ PUT sang POST
    Route::put('/password', [ProfileController::class, 'changePassword']);
});



Route::get('/provinces', [LocationController::class, 'getProvinces']);
Route::get('/districts/{province_id}', [LocationController::class, 'getDistricts']);
Route::get('/wards/{district_id}', [LocationController::class, 'getWards']);
