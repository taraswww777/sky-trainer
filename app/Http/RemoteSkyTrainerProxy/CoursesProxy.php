<?php

namespace App\Http\RemoteSkyTrainerProxy;


class CoursesProxy extends BaseProxy
{

    /** Список курсов */
    function getListCourses(string $authorization, int|string $userId): string
    {
        $response = $this->client($authorization)->get("api/user/$userId/products");

        return $response->getBody()->getContents();
    }

    /** Курсо по $courseId */
    function getCourseById(string $authorization, int|string $userId, int|string $courseId): string
    {
        $response = $this->client($authorization)->get("api/user/$userId/products/$courseId");

        return $response->getBody()->getContents();
    }

    /** Фразы курса $courseId */
    function getCoursePhrases(string $authorization, int|string $userId, int|string $courseId): string
    {
        $response = $this->client($authorization)->get("api/user/$userId/products/$courseId/phrases");

        return $response->getBody()->getContents();
    }

    /** Фразы курса $courseId */
    function getCoursePhraseById(
        string     $authorization,
        int|string $userId,
        int|string $courseId,
        int|string $phraseId
    ): string
    {
        $response = $this->client($authorization)->get(
            "api/user/$userId/products/$courseId/phrases/$phraseId"
        );

        return $response->getBody()->getContents();
    }
}
