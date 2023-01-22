<?php

namespace App\Http\Controllers\RemoteSkyTrainer;

use Illuminate\Http\Request;


abstract class BaseRemoteSkyTrainerController
{
    protected function getAuthorization(Request $request): array|string|null
    {
        return $request->header('Authorization');
    }
}
