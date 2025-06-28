<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Province;
use App\Models\District;
use App\Models\Ward;

class LocationController extends Controller
{
    // Lấy danh sách tỉnh/thành phố
    public function getProvinces()
    {
        $provinces = Province::select('id', 'name')->get();

        return response()->json([
            'status' => true,
            'data' => $provinces
        ]);
    }

    // Lấy danh sách quận/huyện theo tỉnh
    public function getDistricts($province_id)
    {
        $districts = District::where('province_id', $province_id)
                            ->select('id', 'name')
                            ->get();

        return response()->json([
            'status' => true,
            'data' => $districts
        ]);
    }

    // Lấy danh sách phường/xã theo quận
    public function getWards($district_id)
    {
        $wards = Ward::where('district_id', $district_id)
                    ->select('id', 'name')
                    ->get();

        return response()->json([
            'status' => true,
            'data' => $wards
        ]);
    }
}
