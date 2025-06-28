<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $primaryKey = 'user_id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = true;

    protected $fillable = [
        'full_name',
        'email',
        'password_hash',
        'phone_number',
        'role_id',
        'region_id',
        'customer_level_id',
        'province_id',
        'district_id',
        'ward_id',
        'image',
        'is_active',
        'is_blocked',
        'address_detail',
    ];

    protected $hidden = [
        'password_hash',
        'remember_token',
        'reset_token',
        'reset_token_expires_at',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_blocked' => 'boolean',
    ];

    public function province()
    {
        return $this->belongsTo(Province::class, 'province_id');
    }

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    public function ward()
    {
        return $this->belongsTo(Ward::class, 'ward_id');
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function region()
    {
        return $this->belongsTo(Region::class, 'region_id');
    }

    public function customerLevel()
    {
        return $this->belongsTo(CustomerLevel::class, 'customer_level_id');
    }
}
