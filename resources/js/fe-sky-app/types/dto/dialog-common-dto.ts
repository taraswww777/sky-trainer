export interface DialogLogItemDto {
  type: 'manager' | 'bot',
  id?: null,
  text_to_find: string,
  loyalty_correction: number, // +-25
  context: string, // "1_x",
  loyalty_points: number, // 25
  timestamp: number, // 1679768446,
  percent?: null,
  timing?: null
}

export interface FunnelDto {
  value: number,
  max_value: number,
  active: boolean,
  value_type: 'number' | 'percent'
}

export interface ImageDto {
  path: string, // 'https:\/\/api.skytrainer.pro\/img\/user\/823\/dialog\/1_1_2@1.png',
  imgmap: Array<Array<string[]>>// [[['308', '357'], ['524', '357'], ['524', '509'], ['308', '509']]]
}

export interface DialogCommonPointsDto {
  closure_points_percent: number, // 40,
  kpi_percent: number, // 0
}

export interface DialogCommonDto {
  dialog_logs: DialogLogItemDto[],
  loyalty_points: number, // -7,
  next_phrases: {
    context: string, // "2_1"
    getCurThemeStatus: 0,
    phrases: Array<string[]>,
  },
  intermediate: null,
  points: DialogCommonPointsDto,
  stat_points: {
    greetings_points: number, // 3,
    needs_points: number, // 3,
    presentation_points: number, // 7,
    closure_points: number, // 17,
    manager_trust_points: number, // 0,
    product_love_points: number, // 0,
    company_trust_points: number, // 0,
    objection_points: number, // 3,
    kpi_points: number, // 0
  },
  funnel: Record<string, FunnelDto>,
  stage_dialog: number, // 2,
  finish: null,
  dialog_end: boolean,
  dialog_result: null,
  timer: number, // 3274,
  timestamp: number, // 1679768438,
  last_timestamp: number, // 1679768764,
  report_id: number, // 1851591,
}
