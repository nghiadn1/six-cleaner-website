<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\District;
use App\Models\Ward;

class ProfileController extends Controller
{
    public function show()
    {
        $user = Auth::user()->load(['province', 'district', 'ward']);

        return response()->json([
            'status' => true,
            'user' => [
                'user_id'     => $user->user_id,
                'full_name'   => $user->full_name,
                'phone'       => $user->phone_number,
                'email'       => $user->email,
                'image'       => $user->image,
                'address'     => $user->address_detail,
                'province'    => $user->province?->name,
                'district'    => $user->district?->name,
                'ward'        => $user->ward?->name,
                'created_at'  => $user->created_at,
                'updated_at'  => $user->updated_at,
            ]
        ]);
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name'       => 'required|string|max:255',
            'phone_number'    => 'nullable|string|max:20',
            'address_detail'  => 'nullable|string|max:255',
            'province_id'     => 'nullable|exists:provinces,id',
            'district_id'     => 'nullable|exists:districts,id',
            'ward_id'         => 'nullable|exists:wards,id',
            'image'           => 'nullable|file|image|mimes:jpeg,png,jpg|max:1024'
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }
    
        $user = Auth::user();
    
        // Cập nhật ảnh nếu có
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('avatars', 'public');
            $user->image = 'storage/' . $path;
        }
    
        // Chỉ cập nhật trường nào có dữ liệu
        $user->full_name = $request->full_name;
    
        if ($request->has('phone_number')) {
            $user->phone_number = $request->phone_number;
        }
    
        if ($request->has('address_detail')) {
            $user->address_detail = $request->address_detail;
        }
    
        if ($request->has('province_id')) {
            $user->province_id = $request->province_id;
        }
    
        if ($request->has('district_id')) {
            $user->district_id = $request->district_id;
        }
    
        if ($request->has('ward_id')) {
            $user->ward_id = $request->ward_id;
        }
    
        $user->save();
    
        return response()->json([
            'status' => true,
            'message' => 'Cập nhật thành công.',
            'user' => [
                'user_id'     => $user->user_id,
                'full_name'   => $user->full_name,
                'phone'       => $user->phone_number,
                'email'       => $user->email,
                'image'       => $user->image,
                'address'     => $user->address_detail,
            ]
        ]);
    }
    

    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'new_password'     => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password_hash)) {
            return response()->json([
                'status' => false,
                'message' => 'Mật khẩu hiện tại không đúng.'
            ], 400);
        }

        $user->password_hash = Hash::make($request->new_password);
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'Đổi mật khẩu thành công.'
        ]);
    }
}
