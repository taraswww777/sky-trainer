/**
 * https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#instance_properties
 */
interface RecognizerInstanceProperties {
  /**
   * Возвращает и задает коллекцию объектов SpeechGrammar,
   * представляющих грамматики, которые будут поняты текущим SpeechRecognition.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars
   */
  grammars: any
  /**
   * Возвращает и задает язык текущего SpeechRecognition.
   * Если не указано, по умолчанию используется значение атрибута HTML lang или настройка языка
   * пользовательского агента, если она также не установлена.
   */
  lang: string,
  /**
   * Определяет, будут ли возвращаться непрерывные результаты для каждого распознавания или только один результат.
   * По умолчанию один (false).
   */
  continuous: boolean
  /**
   * Управляет тем, должны ли быть возвращены промежуточные результаты (true) или нет (false).
   * Промежуточные результаты — это результаты, которые еще не являются окончательными
   * (например, свойство SpeechRecognitionResult.isFinal имеет значение false).
   */
  interimResults: boolean
  /**
   * Sets the maximum number of SpeechRecognitionAlternatives provided per result. The default value is 1.
   */
  maxAlternatives: boolean
}

/**
 * Events
 * Listen to these events using addEventListener()
 * or by assigning an event listener to the oneventname property of this interface.
 */
interface RecognizerInstanceEvents extends EventTarget {
  /**
   * Запускается, когда пользовательский агент начал захват звука.
   * Также доступно через свойство onaudiostart
   */
  audiostart: Function,

  /**
   * Запускается, когда пользовательский агент закончил захват звука.
   * Также доступно через свойство onaudioend.
   */
  audioend: Function,

  /**
   * Запускается при отключении службы распознавания речи.
   * Также доступно через свойство onend.
   */
  end: Function,

  /**
   * Запускается при возникновении ошибки распознавания речи.
   * Также доступно через свойство onerror.
   */
  error: Function,

  /**
   * Запускается, когда служба распознавания речи возвращает окончательный результат без существенного распознавания.
   * Это может включать некоторую степень признания, которая не соответствует порогу достоверности или превышает его.
   * Также доступно через свойство onnomatch.
   */
  nomatch: Function,

  /**
   * Запускается, когда служба распознавания речи возвращает результат — слово или фраза были положительно распознаны,
   * и это было передано обратно в приложение.
   * Также доступно через свойство onresult.
   */
  result: Function,

  /**
   * Запускается при обнаружении любого звука — разборчивой речи или нет.
   * Также доступно через свойство onsoundstart.
   */
  soundstart: Function,

  /**
   * Запускается, когда любой звук — распознаваемая речь или нет — перестал обнаруживаться.
   * Также доступно через собственность onsoundend.
   */
  soundend: Function,

  /**
   * Запускается при обнаружении звука, распознаваемого службой распознавания речи как речь.
   * Также доступно через свойство onspeechstart.
   */
  speechstart: Function,

  /**
   * Запускается, когда речь, распознаваемая службой распознавания речи, перестала обнаруживаться.
   * Также доступно через свойство onspeechend.
   */
  speechend: Function,

  /**
   * Запускается, когда служба распознавания речи начала прослушивать входящий звук с намерением распознать грамматики,
   * связанные с текущим SpeechRecognition.
   * Также доступно через свойство onstart.
   */
  start: Function,
}

export interface RecognizerInstance extends RecognizerInstanceProperties, RecognizerInstanceEvents {
  /**
   * Останавливает службу распознавания речи от прослушивания входящего звука
   * и не пытается вернуть SpeechRecognitionResult.
   */
  abort: () => void,

  /**
   * Запускает службу распознавания речи,
   * прослушивая входящий звук с намерением распознать грамматики,
   * связанные с текущим SpeechRecognition.
   */
  start: Function,

  /**
   * Останавливает службу распознавания речи от прослушивания входящего звука
   * и пытается вернуть SpeechRecognitionResult, используя уже захваченный звук.
   */
  stop: () => SpeechRecognitionResult,
}

export interface RecognizerObj {
  inst: RecognizerInstance,
  event: any
}
