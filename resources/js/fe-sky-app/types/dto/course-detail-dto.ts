import {NumericAsBoolean} from '@src/types/dto/common-dto';

interface ExtraStagesDto {
  id: string, //  "1"
  caption: string
}

interface PhaseItemDto {
  id: number, // 1,
  name: string,
  enabled: boolean
}

interface AvailableTrainersDto {
  id: number, // 1,
  name: string, // "Open",
  loyalty: number, // 50,
  limit_training: number, // 200,
  limit_exams: number, // 1,
  limit_period: number, // 1,
  max_rand_objections: number, // 2,
  objection_chance: number, // 50,
  loyalty_penalty: number, // -25,
  loyalty_bonus: number, // 5
}

interface PhraseItemDto {
  id: number, // 113314,
  product_id: number, // 5170,
  connect_id: string, // "",
  context_id: string, // "1_2",
  answer_phrases: string,
  answer_phrases_comment: null,
  response_phrases: string,
  voice_id: string, // "7",
  timing: null,
  audio: string, // "https:\/\/api.skytrainer.pro\/audio\/user\/228\/dialog\/1_2.mp3",
  media: string | null,
  images: [],
  points: {
    finish_failed: number, // 0,
    repeated: number, // 0,
    is_bot: NumericAsBoolean,
    theme_closed: number, // 0,
    finish: number, // 0,
    objection: number, // 0,
    greetings_points: number, // 1,
    needs_points: number, // 0,
    presentation_points: number, // 0,
    closure_points: number, // 1,
    manager_trust_points: number, // 0,
    product_love_points: number, // 0,
    company_trust_points: number, // 0,
    objection_points: number, // 0,
    kpi_points: number, // 0
  },
  payload: []
}

export interface CourseDetailDto {
  id: number,
  user_id: number,
  name: string,
  image: string, // "/front/images/no_ava.jpg",
  desc: string,
  difficult: number, // 60,
  script_id: number, // 228,
  dialog_type: number, // 1,
  created: string, // "2021-09-23T10:19:11.000000Z",
  total_limit_exams: number, // 2,
  total_limit_training: number, // 7,
  exam_final_success_text: string,
  exam_final_fail_text: string,
  extra: {
    stages: ExtraStagesDto[],
    training_types: Record<string, NumericAsBoolean>,
    typing_speed: number, // 200,
    screenshots_btn_title: string,
    speak_by_click: NumericAsBoolean
  },
  deleted_at: null | string,
  deleted_by: null | string,
  online: string, // TO DO,
  total_users: string, // TO DO,
  total_duration: string, // "TO DO",
  available_trainers: AvailableTrainersDto[],
  payload: {
    hours_left: number, // 400,
    percentage: number, // 0
  },
  stages: Record<string, string>,
  phases: Record<string, PhaseItemDto>,
  script: {
    id: number,
    script_name: string,
    min_product_points: number, // 1,
    min_manager_points: number, // 1,
    min_company_points: number, // 1,
    min_objection_points: number, // 1,
    min_loyality_points: number, // 1,
    max_kpi_points: number, // 10,
    max_closure_points: number, // 10,
    min_greetings_points: number, // 1,
    min_needs_points: number, // 1,
    min_presentation_points: number, // 1,
    min_closure_points: number, // 1,
    timer: number, // 3600,
    training_type: number, // 1,
    lang: string, // "ru-RU",
    voices: string[] // ["7"]
  },
  phrases: PhraseItemDto[]
}
