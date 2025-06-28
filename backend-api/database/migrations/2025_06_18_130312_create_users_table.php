<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id_user');
            $table->string('fullName');
            $table->string('phone')->nullable();
            $table->string('email')->unique();
            $table->enum('role', ['customer', 'admin', 'staff'])->default('customer');
            $table->boolean('isActive')->default(1);
            $table->string('password');
            $table->string('image')->nullable();
            $table->boolean('isBlocked')->default(0);
            $table->string('resetToken')->nullable();
            $table->timestamp('resetTokenExpiresAt')->nullable();
            $table->timestamps(); // created_at & updated_at
        });
    }

    public function down(): void {
        Schema::dropIfExists('users');
    }
};
