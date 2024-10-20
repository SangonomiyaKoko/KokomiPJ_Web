import { createI18n } from 'vue-i18n'
import ZHCN from './language/zh-cn'
import EN from './language/en'

const messages = {
    zhcn: {
        ...ZHCN
    },
    en: {
        ...EN
    }
}

const locale = 'en'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: locale,
    messages: messages
})

export default i18n