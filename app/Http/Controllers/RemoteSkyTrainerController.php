<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

const API_URL = 'https://api.skytrainer.pro';

class RemoteSkyTrainerController extends Controller
{

    function getToken(Request $request): string
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $params = [
            'query' => [
                'email' => $email,
                'password' => $password,
            ]
        ];

        $response = $this->client()->post(
            '/sanctum/token',
            $params
        );

        return $response->getBody()->getContents();
    }

    private function client(): Client
    {
        return new Client([
            'base_uri' => API_URL,
            'headers' => [],
        ]);
    }
}
