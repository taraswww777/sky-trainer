<?php

namespace App\Http\Controllers\RemoteSkyTrainer;

use App\Http\RemoteSkyTrainerProxy\UsersProxy;
use Illuminate\Http\Request;

class UsersController extends BaseRemoteSkyTrainerController
{
    private UsersProxy $__proxy;

    public function __construct()
    {
        $this->__proxy = new UsersProxy();
    }

    function getCurrentUser(Request $request): string
    {
        return $this->__proxy->getCurrentUser($this->getAuthorization($request));
    }

    function getToken(Request $request): string
    {
        $email = $request->input('email');
        $password = $request->input('password');
        return $this->__proxy->getToken($email, $password);
    }
}
