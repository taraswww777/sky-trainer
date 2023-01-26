<?php

namespace App\Http\Controllers\RemoteSkyTrainer;

use App\Http\RemoteSkyTrainerProxy\CoursesProxy;
use App\Http\RemoteSkyTrainerProxy\UsersProxy;
use Illuminate\Http\Request;

class CoursesController extends BaseRemoteSkyTrainerController
{
    private CoursesProxy $__coursesProxy;
    private UsersProxy $__usersProxy;

    public function __construct()
    {
        $this->__coursesProxy = new CoursesProxy();
        $this->__usersProxy = new UsersProxy();
    }

    function getListCourses(Request $request): string
    {
        $token = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($token);

        return $this->__coursesProxy->getListCourses($token, $userId);
    }

    function getCourse(Request $request, $courseId): string
    {
        $token = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($token);

        return $this->__coursesProxy->getCourseById($token, $userId, $courseId);
    }

    function getCoursePhrases(Request $request, $courseId): string
    {
        $token = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($token);

        return $this->__coursesProxy->getCoursePhrases($token, $userId, $courseId);
    }

    function getCoursePhraseById(Request $request, $courseId, $phraseId): string
    {
        $token = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($token);

        return $this->__coursesProxy->getCoursePhraseById($token, $userId, $courseId, $phraseId);
    }

}
