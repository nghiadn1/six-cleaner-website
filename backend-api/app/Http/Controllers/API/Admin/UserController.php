<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Province;
use App\Models\District;
use App\Models\Ward;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with(['province', 'district', 'ward'])->get();

        $users = $users->map(function ($user) {
            return [
                'id'         => $user->user_id,
                'fullName'   => $user->full_name,
                'email'      => $user->email,
                'phone'      => $user->phone_number,
                'image'      => $user->image,
                'role_id'    => $user->role_id,
                'province'   => optional($user->province)->name,
                'district'   => optional($user->district)->name,
                'ward'       => optional($user->ward)->name,
                'address'    => $user->address_detail,
                'isActive'   => $user->is_active,
                'isBlocked'  => $user->is_blocked,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ];
        });

        return response()->json([
            'status' => true,
            'users'  => $users
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'full_name'     => 'required|string|max:255',
            'email'         => 'required|email|unique:users,email',
            'password'      => 'required|string|min:6',
            'role_id'       => 'required|numeric',
            'phone_number'  => 'nullable|string|max:20',
            'province_id'   => 'required|exists:provinces,id',
            'district_id'   => 'required|exists:districts,id',
            'ward_id'       => 'required|exists:wards,id',
            'address_detail'=> 'nullable|string|max:255',
            'image'         => 'nullable|image|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => false,
                'message' => 'Dữ liệu không hợp lệ',
                'errors'  => $validator->errors()
            ], 422);
        }

        $district = District::find($request->district_id);
        $ward     = Ward::find($request->ward_id);

        if ($district->province_id != $request->province_id) {
            return response()->json([
                'status' => false,
                'message' => 'Quận/huyện không thuộc tỉnh/thành đã chọn.'
            ], 422);
        }

        if ($ward->district_id != $request->district_id) {
            return response()->json([
                'status' => false,
                'message' => 'Phường/xã không thuộc quận/huyện đã chọn.'
            ], 422);
        }

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('avatars', 'public');
        }

        $user = User::create([
            'full_name'      => $request->full_name,
            'email'          => $request->email,
            'password_hash'  => Hash::make($request->password),
            'role_id'        => $request->role_id,
            'is_active'      => true,
            'is_blocked'     => false,
            'phone_number'   => $request->phone_number,
            'image'          => $imagePath ? 'storage/' . $imagePath : null,
            'address_detail' => $request->address_detail,
            'province_id'    => $request->province_id,
            'district_id'    => $request->district_id,
            'ward_id'        => $request->ward_id,
        ]);

        $user->load(['province', 'district', 'ward']);

        return response()->json([
            'status'  => true,
            'message' => 'Thêm người dùng thành công',
            'user'    => [
                'id'         => $user->user_id,
                'fullName'   => $user->full_name,
                'email'      => $user->email,
                'role_id'    => $user->role_id,
                'province'   => optional($user->province)->name,
                'district'   => optional($user->district)->name,
                'ward'       => optional($user->ward)->name,
                'address'    => $user->address_detail,
                'isActive'   => $user->is_active,
                'isBlocked'  => $user->is_blocked,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ]
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'full_name'     => 'sometimes|string|max:255',
            'email'         => 'sometimes|email|unique:users,email,' . $id . ',user_id',
            'password'      => 'nullable|string|min:6',
            'role_id'       => 'sometimes|numeric',
            'is_active'     => 'boolean',
            'is_blocked'    => 'boolean',
            'province_id'   => 'sometimes|exists:provinces,id',
            'district_id'   => 'sometimes|exists:districts,id',
            'ward_id'       => 'sometimes|exists:wards,id',
            'address_detail'=> 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => false,
                'message' => 'Dữ liệu không hợp lệ',
                'errors'  => $validator->errors()
            ], 422);
        }

        if ($request->filled('province_id') && $request->filled('district_id')) {
            $district = District::find($request->district_id);
            if ($district && $district->province_id != $request->province_id) {
                return response()->json([
                    'status' => false,
                    'message' => 'Quận/huyện không thuộc tỉnh/thành đã chọn.'
                ], 422);
            }
        }

        if ($request->filled('district_id') && $request->filled('ward_id')) {
            $ward = Ward::find($request->ward_id);
            if ($ward && $ward->district_id != $request->district_id) {
                return response()->json([
                    'status' => false,
                    'message' => 'Phường/xã không thuộc quận/huyện đã chọn.'
                ], 422);
            }
        }

        if ($request->filled('password')) {
            $user->password_hash = Hash::make($request->password);
        }

        $user->fill($request->except(['password']));
        $user->save();
        $user->load(['province', 'district', 'ward']);

        return response()->json([
            'status'  => true,
            'message' => 'Cập nhật người dùng thành công',
            'user'    => [
                'id'         => $user->user_id,
                'fullName'   => $user->full_name,
                'email'      => $user->email,
                'role_id'    => $user->role_id,
                'province'   => optional($user->province)->name,
                'district'   => optional($user->district)->name,
                'ward'       => optional($user->ward)->name,
                'address'    => $user->address_detail,
                'isActive'   => $user->is_active,
                'isBlocked'  => $user->is_blocked,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ]
        ]);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json([
            'status'  => true,
            'message' => 'Xoá người dùng thành công'
        ]);
    }

    public function show($id)
    {
        $user = User::with(['province', 'district', 'ward'])->findOrFail($id);

        return response()->json([
            'status' => true,
            'user'   => [
                'id'         => $user->user_id,
                'fullName'   => $user->full_name,
                'email'      => $user->email,
                'phone'      => $user->phone_number,
                'image'      => $user->image,
                'role_id'    => $user->role_id,
                'province'   => optional($user->province)->name,
                'district'   => optional($user->district)->name,
                'ward'       => optional($user->ward)->name,
                'address'    => $user->address_detail,
                'isActive'   => $user->is_active,
                'isBlocked'  => $user->is_blocked,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
            ]
        ]);
    }
}
