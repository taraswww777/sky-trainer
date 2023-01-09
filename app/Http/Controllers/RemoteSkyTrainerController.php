<?php

namespace App\Http\Controllers;

use App\MyTools\Dump;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

const API_URL = 'https://api.skytrainer.pro';

class RemoteSkyTrainerController extends Controller
{

    function getCurrentUser(Request $request): string
    {
        Dump::xf($request->header('Authorization'));
        $response = $this->client()->get(
            '/api/user/current',
            [
                'headers' => [
                    'authorization' => $request->header('Authorization')
                ]
            ]
        );

        return $response->getBody()->getContents();
    }

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
