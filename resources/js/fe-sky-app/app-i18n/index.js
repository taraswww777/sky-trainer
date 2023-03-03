import {createI18n} from 'vue-i18n';
import {DEFAULT_LOCALE} from './constants';
import MESSAGES_RU from './ru.json';

export const i18nInstance = createI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    [DEFAULT_LOCALE]: MESSAGES_RU
  }
});
