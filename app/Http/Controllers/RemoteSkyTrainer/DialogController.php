<?php

namespace App\Http\Controllers\RemoteSkyTrainer;

use App\Http\RemoteSkyTrainerProxy\CoursesProxy;
use App\Http\RemoteSkyTrainerProxy\UsersProxy;
use App\MyTools\Dump;
use Illuminate\Http\Request;

class DialogController extends BaseRemoteSkyTrainerController
{
    private CoursesProxy $__coursesProxy;
    private UsersProxy $__usersProxy;

    public function __construct()
    {
        $this->__coursesProxy = new CoursesProxy();
        $this->__usersProxy = new UsersProxy();
    }


    function start(Request $request, $courseId): string
    {
        $token = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($token);

        $stageId = $request->get('stageId');
        $phaseId = $request->get('phaseId');
        $trainerId = $request->get('trainerId');

        return $this->__coursesProxy->startDialog(
            $token, $userId, $courseId,
            $stageId, $phaseId, $trainerId
        );
    }

    function stop(Request $request, $courseId): string
    {
        $authorization = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($authorization);

        return $this->__coursesProxy->stopDialog($authorization, $userId, $courseId);
    }

    function reset(Request $request, $courseId): string
    {
        $authorization = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($authorization);

        return $this->__coursesProxy->resetDialog($authorization, $userId, $courseId);
    }

    function speechResult(Request $request, $courseId): string
    {
        $authorization = $this->getAuthorization($request);
        $userId = $this->__usersProxy->getIdCurrentUser($authorization);

        $speechResult = $request->post('speechResult');
        $timing = $request->post('timing');

        return $this->__coursesProxy->speechResultDialog(
            $authorization, $userId, $courseId,
            $speechResult, $timing
        );
    }
}
