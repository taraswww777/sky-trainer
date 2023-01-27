import {axiosAuthGet} from "./base";

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
