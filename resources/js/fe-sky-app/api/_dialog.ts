import {DialogStartDto, DialogFlowDto} from '@src/types/dto';
import {axiosAuthGet} from './_base';

interface GetDialogStartParams {
  courseId: string,
  stageId: string,
  phaseId: string,
  trainerId: string
}

export const getDialogStart = ({
  courseId,
  stageId,
  phaseId,
  trainerId
}: GetDialogStartParams) => (
  axiosAuthGet<DialogStartDto>({
    url: `/dialog/start/${courseId}`,
    params: {
      stageId,
      phaseId,
      trainerId
    }
  })
);

export interface PostDialogSpeechResultParams {
  courseId: string,
  speechResult: string,
  timing: string
}

export const postDialogSpeechResult = ({
  courseId,
  speechResult,
  timing
}: PostDialogSpeechResultParams) => (
  axiosAuthGet<DialogFlowDto>({
    url: `/dialog/speech-result/${courseId}`,
    method: 'post',
    data: {
      speechResult,
      timing
    }
  })
);
