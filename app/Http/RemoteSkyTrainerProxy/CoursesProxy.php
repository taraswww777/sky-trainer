<?php

namespace App\Http\RemoteSkyTrainerProxy;


class CoursesProxy extends BaseProxy
{

    function getListCourses(string $authorization, int|string $userId): string
    {
        $response = $this->client($authorization)->get("api/user/$userId/products");

        return $response->getBody()->getContents();
    }

    function getCourseById(string $authorization, int|string $userId, int|string $courseId): string
    {
        $response = $this->client($authorization)->get("api/user/$userId/products/$courseId");

        return $response->getBody()->getContents();
    }
}
