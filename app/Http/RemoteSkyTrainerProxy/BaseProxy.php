<?php

namespace App\Http\RemoteSkyTrainerProxy;

use GuzzleHttp\Client;


abstract class BaseProxy
{
    static string $API_URL = 'https://api.skytrainer.pro';

   protected function client(string $authorization = null): Client
    {
        $headers = [];
        if ($authorization) {
            $headers['authorization'] = $authorization;
        }
        return new Client([
            'base_uri' => self::$API_URL,
            'headers' => $headers,
        ]);
    }
}
