<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class ProfileController extends Controller
{
    public function show()
    {
        $user = Auth::user()->load(['province', 'district', 'ward']);

        return response()->json([
            'status' => true,
            'user'   => [
                'user_id'   => $user->user_id,
                'fullName'  => $user->fullName,
                'phone'     => $user->phone,
                'email'     => $user->email,
                'role'      => $user->role,
                'image'     => $user->image,
                'address'   => $user->address,
                'province'  => $user->province?->name,
                'district'  => $user->district?->name,
                'ward'      => $user->ward?->name,
                'createdAt' => $user->created_at,
                'updatedAt' => $user->updated_at,
            ]
        ]);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fullName'     => 'required|string|max:255',
            'phone'        => 'nullable|string|max:20',
            'image'        => 'nullable|string',
            'address'      => 'nullable|string|max:255',
            'province_id'  => 'nullable|exists:provinces,id',
            'district_id'  => 'nullable|exists:districts,id',
            'ward_id'      => 'nullable|exists:wards,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $province_id = $request->province_id;
        $district_id = $request->district_id;
        $ward_id     = $request->ward_id;

        if ($district_id && $province_id) {
            $validDistrict = \App\Models\District::where('id', $district_id)
                ->where('province_id', $province_id)
                ->exists();

            if (!$validDistrict) {
                return response()->json([
                    'status' => false,
                    'message' => 'Quận/Huyện không thuộc Tỉnh/Thành đã chọn.'
                ], 422);
            }
        }

        if ($ward_id && $district_id) {
            $validWard = \App\Models\Ward::where('id', $ward_id)
                ->where('district_id', $district_id)
                ->exists();

            if (!$validWard) {
                return response()->json([
                    'status' => false,
                    'message' => 'Xã/Phường không thuộc Quận/Huyện đã chọn.'
                ], 422);
            }
        }

        $user = Auth::user();
        $user->update($request->only([
            'fullName',
            'phone',
            'image',
            'address',
            'province_id',
            'district_id',
            'ward_id'
        ]));

        $user->refresh()->load(['province', 'district', 'ward']);

        return response()->json([
            'status' => true,
            'message' => 'Cập nhật thông tin thành công.',
            'user'   => [
                'user_id'   => $user->user_id,
                'fullName'  => $user->fullName,
                'phone'     => $user->phone,
                'email'     => $user->email,
                'role'      => $user->role,
                'image'     => $user->image,
                'address'   => $user->address,
                'province'  => $user->province?->name,
                'district'  => $user->district?->name,
                'ward'      => $user->ward?->name,
                'createdAt' => $user->created_at,
                'updatedAt' => $user->updated_at,
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

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Mật khẩu hiện tại không đúng.'
            ], 400);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json([
            'status' => true,
            'message' => 'Đổi mật khẩu thành công.'
        ]);
    }
}
