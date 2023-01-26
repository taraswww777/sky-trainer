<?php

namespace App\Http\RemoteSkyTrainerProxy;


use App\MyTools\Dump;
use http\Params;

class CoursesProxy extends BaseProxy
{

    /** Список курсов */
    function getListCourses(string $token, int|string $userId): string
    {
        $response = $this->client($token)->get("api/user/$userId/products");

        return $response->getBody()->getContents();
    }

    /** Курсо по $courseId */
    function getCourseById(string $token, int|string $userId, int|string $courseId): string
    {
        $response = $this->client($token)->get("api/user/$userId/products/$courseId");
        $course = json_decode($response->getBody()->getContents());
        if ($course && $course->extra && $course->extra->stages) {
            $stages = [];
            foreach ($course->extra->stages as $key => $stage) {
                $stages[] = [
                    'id' => $key,
                    'caption' => $stage
                ];
            }
            $course->extra->stages = $stages;
        }
        Dump::xf($course, false);
        return json_encode($course);
    }

    /** Фразы курса $courseId */
    function getCoursePhrases(string $token, int|string $userId, int|string $courseId): string
    {
        $response = $this->client($token)->get("api/user/$userId/products/$courseId/phrases");

        return $response->getBody()->getContents();
    }

    /** Фразы курса $courseId */
    function getCoursePhraseById(
        string     $token,
        int|string $userId,
        int|string $courseId,
        int|string $phraseId
    ): string
    {
        $response = $this->client($token)->get(
            "api/user/$userId/products/$courseId/phrases/$phraseId"
        );

        return $response->getBody()->getContents();
    }

    /** Инициализирует диалог */
    function startDialog(
        string          $token,
        int|string      $userId,
        int|string      $courseId,
        int|string      $stageId,
        int|string      $phaseId,
        int|string|null $trainerId
    ): string
    {
        $response = $this->client($token)->get(
            "api/user/$userId/products/$courseId/dialogflow/start",
            [
                'query' => array_filter([
                    'stage' => $stageId,
                    'phase' => $phaseId,
                    'trainer_id' => $trainerId,
                ])
            ]
        );

        return $response->getBody()->getContents();
    }

    /** Требуется отправить этот запрос при нажатии на кнопку "Завершить" */
    function stopDialog(
        string     $token,
        int|string $userId,
        int|string $courseId
    ): string
    {
        $response = $this->client($token)->get(
            "api/user/$userId/products/$courseId/dialogflow/stop"
        );

        return $response->getBody()->getContents();
    }

    /** Требуется отправить этот запрос при нажатии на кнопку "Начать заново" */
    function resetDialog(
        string     $token,
        int|string $userId,
        int|string $courseId
    ): string
    {
        $response = $this->client($token)->get(
            "api/user/$userId/products/$courseId/dialogflow/reset"
        );

        return $response->getBody()->getContents();
    }

    /** Посредством этого запроса нужно отправлять реплики тренеру-боту. */
    function speechResultDialog(
        string     $token,
        int|string $userId,
        int|string $courseId,
        string     $speechResult,
        int|null   $timing
    ): string
    {
        $response = $this->client($token)->post(
            "api/user/$userId/products/$courseId/dialogflow/speech_result",
            [
                'body' => array_filter([
                    'speech_result' => $speechResult,
                    'timing' => $timing,
                ])
            ]
        );

        return $response->getBody()->getContents();
    }
}
