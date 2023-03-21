import type {NumericAsBoolean} from './common-dto';

interface DesktopConfigItemDTO {
  id: string, // "619f6ad74b38a"
  title: string, // "\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f"
  products: Record<string, string>
}

interface UserDetailRating{
  value: number,
  place: number
}

interface UserRecommendationProduct{
  title: string
  description: string
  type: string
}

interface UserRecommendation{
  product_id: number,
  product_title:string,
  recommendation: UserRecommendationProduct[]
}

interface TrainingTimeDTO{
  trainer_id: number, // 1,
  name: 'Open' | 'Aggressive' | 'Normal' | string // "Open",
  today_duration: string, // 0,
  total_duration: string, // 87903,
  today_duration_his: string, // "00:00:00",
  total_duration_his: string, // "24:25:03"
}

/** DTO описывающее сведения о текущем пользователе */
export interface CurrentUserDto {
  /** id */
  id: number,
  /**  */
  parent_id: number | null,
  /** имя пользователя */
  name: string,
  /** email пользователя */
  email: string,
  /**  */
  desc: any[],
  /** телефон пользователя */
  phone: string,
  /** дата и время, создания пользователя */
  create_time: string, // "2021-03-13T22:57:08.000000Z",
  /** дата и время, последнего входа пользователя */
  last_join_time: string, // "2023-03-18T18:48:25.000000Z",
  /** activate */
  activate: NumericAsBoolean,
  /** путь до иконки пользователя, с http */
  image: string,
  /** used_time */
  used_time: string, // "00:00:00"
  /** used_time_sec */
  used_time_sec: number, // 109140
  /** total_time */
  total_time: string, // "2:00:00"
  /** total_time_sec */
  total_time_sec: number, // 36000000
  /** total_used_time */
  total_used_time: string, // "00:00:00"
  /** total_used_time_sec */
  total_used_time_sec: number, // 272968
  /** training_time_reset_date */
  training_time_reset_date: string | null,
  /** is_partner */
  is_partner: boolean,
  /** promocode_id */
  promocode_id: string | null,
  /** teaching_enabled */
  teaching_enabled: NumericAsBoolean,
  /** is_admin */
  is_admin: boolean,
  /** desktop_config */
  desktop_config: Record<string, DesktopConfigItemDTO>,
  /** view_reports */
  view_reports: boolean,
  /** vosk */
  vosk: any, // 0,
  /** licenses */
  licenses: any, // null,
  /** какието мнения */
  opinion: string[]
  /** deleted_at */
  deleted_at: any, // null,
  /** deleted_by */
  deleted_by: any, // null,
  /** type */
  type: 1,
  /** короткое имя пользователя */
  name_short: string,
  /** dialog_enabled */
  dialog_enabled: boolean,
  /** training_time */
  training_time: TrainingTimeDTO[],
  /** rating */
  rating: {
    value: number, // 4.1,
    place: number,
    details: {
      exams_passed: UserDetailRating,
      training_time_total: UserDetailRating,
      speech_errors: UserDetailRating,
      phrase_errors: UserDetailRating
    }
  },
  /** recommendation */
  recommendation: UserRecommendation[]
}
