<?php

use App\Http\Controllers\EController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\EmployeeController;


//AUTHENTICATED ROUTES
Route::prefix('admin')->name('admin.')->group(function(){
    Route::group(['middleware' => 'auth'], function () {
        Route::get('/dashboard', function () {
            return view('admin.dashboard');
        })->name('admin.dashboard');

        Route::get('employees/index', function () {
            return view('admin.employees.index');
        });

        Route::get('/employees',[EmployeeController::class ,'index']);

        Route::get('employees/view', [EmployeeController::class ,'edit']);

        Route::get('employees/create', [EmployeeController::class ,'create']);
        Route::post('/employees',[EmployeeController::class ,'store']);

        Route::get('employees/edit/{id}', [EmployeeController::class ,'edit']);
        Route::put('/employees/{id}',[EmployeeController::class ,'update']);

        Route::delete('/employees/{id}',[EmployeeController::class ,'destroy']);

    });
});