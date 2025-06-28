<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use App\Models\Province;
use App\Models\District;
use App\Models\Ward;

class LocationSeeder extends Seeder
{
   public function run()
{
    $data = Http::timeout(60)->get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json")->json();

    foreach ($data as $provinceItem) {
        if (!isset($provinceItem['Id'], $provinceItem['Name'])) continue;

        $province = Province::create([
            'code' => $provinceItem['Id'],
            'name' => $provinceItem['Name'],
        ]);

        foreach ($provinceItem['Districts'] as $districtItem) {
            if (!isset($districtItem['Id'], $districtItem['Name'])) continue;

            $district = District::create([
                'code' => $districtItem['Id'],
                'name' => $districtItem['Name'],
                'province_id' => $province->id,
            ]);

            foreach ($districtItem['Wards'] as $wardItem) {
                if (!isset($wardItem['Id'], $wardItem['Name'])) continue;

                Ward::create([
                    'code' => $wardItem['Id'],
                    'name' => $wardItem['Name'],
                    'level' => $wardItem['Level'] ?? null,
                    'district_id' => $district->id,
                ]);
            }
        }
    }
}

}
