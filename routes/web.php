<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UsersController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::controller(UsersController::class)->group(function () {
        Route::get('users', 'index')->name('users');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
