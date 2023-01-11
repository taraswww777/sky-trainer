<?php

namespace App\Http\Controllers\RemoteSkyTrainer;

use App\Http\RemoteSkyTrainerProxy\UsersProxy;
use Illuminate\Http\Request;

class UsersController extends BaseRemoteSkyTrainerController
{
    private UsersProxy $__usersProxy;

    public function __construct()
    {
        $this->__usersProxy = new UsersProxy();
    }

    function getCurrentUser(Request $request): string
    {
        return $this->__usersProxy->getCurrentUser($this->getAuthorization($request));
    }

    function getToken(Request $request): string
    {
        $email = $request->input('email');
        $password = $request->input('password');
        return $this->__usersProxy->getToken($email, $password);
    }
}
