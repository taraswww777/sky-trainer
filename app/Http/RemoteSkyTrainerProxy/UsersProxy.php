<?php

namespace App\Http\RemoteSkyTrainerProxy;

use App\MyTools\Dump;

class UsersProxy extends BaseProxy
{

    function getCurrentUser(string $token): string
    {
        $response = $this->client($token)->get('/api/user/current');

        return $response->getBody()->getContents();
    }

    function getIdCurrentUser(string $token): int
    {
        $jsonString = $this->getCurrentUser($token);
        $jsonObj = json_decode($jsonString);
        return $jsonObj->id;
    }

    function getToken(string $email, string $password): string
    {
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
}
