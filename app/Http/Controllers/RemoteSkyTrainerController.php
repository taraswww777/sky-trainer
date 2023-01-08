<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use PHPUnit\Util\Json;

const API_URL = 'https://api.skytrainer.pro';

class RemoteSkyTrainerController extends Controller
{
    function getToken(Request $request)
    {
        $token = '';
        $email = $request->input('email');
        $password = $request->input('password');

        $client = new Client([
            'base_uri' => API_URL,
            'headers' => [
                'content-type' => 'application/json',
                'Accept' => 'application/json'
            ],
        ]);

        $params = [
            'json' =>[
                'email' => $email,
                'password' => $password,
            ]
        ];

        $response = $client->post(
            '/sanctum/token',
            $params
        );


        return [
            'token' => $token,
            'params' => $params,
            'getStatusCode'=> $response->getStatusCode(),
            'data' => $response->getBody()
        ];
    }
}
