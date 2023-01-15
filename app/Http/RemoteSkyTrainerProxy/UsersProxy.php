<?php

namespace App\Http\RemoteSkyTrainerProxy;

use App\MyTools\Dump;

class UsersProxy extends BaseProxy
{

    function getCurrentUser(string $authorization): string
    {
        $response = $this->client($authorization)->get('/api/user/current');

        return $response->getBody()->getContents();
    }

    function getIdCurrentUser(string $authorization): int
    {
        $jsonString = $this->getCurrentUser($authorization);
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
