import {axiosAuthGet} from './base';

export const requestDialogStart = (
  {
    courseId,
    stageId,
    phaseId,
    trainerId
  }
) => (
  axiosAuthGet({
    url: `/dialog/start/${courseId}`,
    params: {
      stageId,
      phaseId,
      trainerId
    }
  })
);

export const requestDialogSpeechResult = (
  {
    courseId,
    speechResult,
    timing
  }
) => (
  axiosAuthGet({
    url: `/dialog/speech-result/${courseId}`,
    method: 'post',
    data: {
      speechResult,
      timing
    }
  })
);
