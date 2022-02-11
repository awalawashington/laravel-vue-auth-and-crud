<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employee extends Model
{
    use HasApiTokens,HasFactory,Notifiable, SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'employee_id',
        'daily_rate',
        'status',
        'password',
    ];
}
