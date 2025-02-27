<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        ray((new User)->first())->blue();
        
        return Inertia::render('admin/list-all', [
            'users' => User::all(),
        ]);
    }
}
