import {
  DialogCommonDto,
  DialogCommonPointsDto,
  ImageDto
} from './dialog-common-dto';

export interface DialogFlowDto extends DialogCommonDto {
  audio_token: string,
  points: DialogCommonPointsDto & {
    greetings_points: number, // 4,
    needs_points: number, // 0,
    presentation_points: number, // 0,
    closure_points: number, // 4,
    manager_trust_points: number, // 0,
    product_love_points: number, // 0,
    company_trust_points: number, // 0,
    objection_points: number, // 0,
    kpi_points: number // 0,
  },
  $phrase: {
    id: number, // 174444,
    product_id: number, // 7450,
    connect_id: string, // '2_1',
    context_id: string, // '1_1_2',
    answer_phrases: string, // '\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044e',
    answer_phrases_comment: null,
    response_phrases: string, // '\u0414\u0430',
    voice_id: string, // '1',
    timing: number, // 0,
    audio: string | null, // 'https:\/\/api.skytrainer.pro\/audio\/user\/823\/anger\/1_1_2.mp3',
    media: null,
    images: ImageDto[],
    payload: []
  },
  $message: {
    index: number, // 2,
    text_to_find: string, // '\u043d\u0430 \u043b\u043d',
    percent: number, // 96,
    answer_phrase: string, // '\u0425\u043e\u0440\u043e\u0448\u043e?',
    response_phrase: string, // '\u0414\u0430\u0435\u043c \u0434\u0435\u043b\u043e. ',
    loyalty_correction: number, // 5
  }
}
