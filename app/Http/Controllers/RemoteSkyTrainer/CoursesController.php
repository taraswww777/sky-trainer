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
        $authorization = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($authorization);

        return $this->__coursesProxy->getListCourses($authorization, $userId);
    }

    function getCourse(Request $request, $courseId): string
    {
        $authorization = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($authorization);

        return $this->__coursesProxy->getCourseById($authorization, $userId, $courseId);
    }

    function getCoursePhrases(Request $request, $courseId): string
    {
        $authorization = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($authorization);

        return $this->__coursesProxy->getCoursePhrases($authorization, $userId, $courseId);
    }

    function getCoursePhraseById(Request $request, $courseId, $phraseId): string
    {
        $authorization = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($authorization);

        return $this->__coursesProxy->getCoursePhraseById($authorization, $userId, $courseId, $phraseId);
    }

}
