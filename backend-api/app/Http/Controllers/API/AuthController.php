<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            \Log::info('🔥 Dữ liệu form gửi lên:', $request->all());
            \Log::info('🔥 Dữ liệu login:', $request->all());
            $validator = Validator::make(
                $request->all(),
                [
                    'full_name' => 'required|string|min:2|max:255|regex:/^[\p{L}\s]+$/u',
                    'email' => 'required|email|unique:users,email',
                    'password' => 'required|min:6|confirmed',
                    'phone_number' => 'required|string|max:20',
                    'image' => 'nullable|image|max:2048',
                    'address_detail' => 'nullable|string|max:255',
                    'province_id' => 'required|exists:provinces,id',
                    'district_id' => 'required|exists:districts,id',
                    'ward_id' => 'required|exists:wards,id',
                ],
                [
                    'full_name.required' => 'Họ tên không được để trống',
                    'full_name.string'   => 'Họ tên phải là chuỗi ký tự',
                    'full_name.min'      => 'Họ tên phải có ít nhất :min ký tự',
                    'full_name.max'      => 'Họ tên không được vượt quá :max ký tự',
                    'full_name.regex'    => 'Họ tên chỉ được chứa chữ cái và khoảng cách',

                    'email.required'    => 'Email không được để trống',
                    'email.email'       => 'Email không đúng định dạng',
                    'email.unique'      => 'Email đã được sử dụng',

                    'password.required'  => 'Mật khẩu không được để trống',
                    'password.min'       => 'Mật khẩu phải có ít nhất :min ký tự',
                    'password.confirmed' => 'Xác nhận mật khẩu không khớp',

                    'phone_number.required' => 'Số điện thoại không được để trống',
                ]
            );

            if ($validator->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Dữ liệu không hợp lệ',
                    'errors' => $validator->errors()
                ], 422);
            }

            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('avatars', 'public');
            }

$user = User::create([
    'full_name'         => $request->full_name,
    'email'             => $request->email,
    'password_hash'     => Hash::make($request->password),
    'role_id'           => 4,
    'is_active'         => true,
    'is_blocked'        => false, // nên có để khớp với bảng
    'phone_number'      => $request->phone_number,
    'image'             => $imagePath ? 'storage/' . $imagePath : null,
    'address_detail'    => $request->address_detail,
    'province_id'       => $request->province_id,
    'district_id'       => $request->district_id,
    'ward_id'           => $request->ward_id,
]);
            \Log::info('🔥 Người dùng tạo: ', $user->toArray());
            return response()->json([
                'status' => true,
                'message' => 'Đăng ký thành công',
                'user' => $user
            ], 201);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => false,
                'message' => 'Lỗi hệ thống: ' . $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
            ], 500);
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password_hash)) {
            return response()->json([
                'status' => false,
                'message' => 'Email hoặc mật khẩu không chính xác'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Đăng nhập thành công',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }

    public function sendOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Email không hợp lệ',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::where('email', $request->email)->first();
        $now = Carbon::now();

        if ($user->reset_token_expires_at && $now->diffInSeconds(Carbon::parse($user->reset_token_expires_at)) < 60) {
            return response()->json([
                'status' => false,
                'message' => 'Vui lòng đợi ít nhất 1 phút để gửi lại OTP.'
            ], 429);
        }

        $otp = rand(100000, 999999);
        $user->reset_token = $otp;
        $user->reset_token_expires_at = $now->addMinutes(10);
        $user->save();

        Mail::raw("Mã OTP của bạn là: $otp", function ($message) use ($user) {
            $message->to($user->email)->subject('Xác thực OTP');
        });

        return response()->json([
            'status' => true,
            'message' => 'Đã gửi mã OTP qua email.'
        ]);
    }

    public function verifyOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'otp'   => 'required|digits:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Dữ liệu không hợp lệ',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (
            !$user->reset_token ||
            $user->reset_token != $request->otp ||
            Carbon::parse($user->reset_token_expires_at)->isPast()
        ) {
            return response()->json([
                'status' => false,
                'message' => 'Mã OTP không hợp lệ hoặc đã hết hạn.'
            ], 400);
        }

        return response()->json([
            'status' => true,
            'message' => 'Xác minh OTP thành công.'
        ]);
    }

    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email|exists:users,email',
            'otp'      => 'required|digits:6',
            'password' => 'required|min:6|confirmed'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Dữ liệu không hợp lệ',
                'errors' => $validator->errors()
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        if (
            !$user->reset_token ||
            $user->reset_token != $request->otp ||
            Carbon::parse($user->reset_token_expires_at)->isPast()
        ) {
            return response()->json([
                'status' => false,
                'message' => 'Mã OTP không hợp lệ hoặc đã hết hạn.'
            ], 400);
        }

        $user->password_hash = Hash::make($request->password);
        $user->reset_token = null;
        $user->reset_token_expires_at = null;
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'Mật khẩu đã được thay đổi.'
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Đăng xuất thành công.'
        ]);
    }
}
