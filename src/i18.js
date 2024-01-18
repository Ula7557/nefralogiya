import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextChainedBackend from "i18next-chained-backend";
import I18NextHttpBackend from "i18next-http-backend";
import I18NextLocalStorageBackend from "i18next-localstorage-backend";
import uz from './locales/uz/translations.json'
import ru from './locales/ru/translations.json'
import krl from './locales/krl/translations.json'
import {
    initReactI18next
} from "react-i18next";
const resources = {
    uz: {
        translation: uz
    },
    ru: {
        translation: ru
    },
    krl: {
        translation: krl
    }
};

i18n
    .use(I18NextChainedBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources,
        fallbackLng:  "uz",
        interpolation: {
            escapeValue: false,
        },
        backend: {
            backends: [I18NextLocalStorageBackend, I18NextHttpBackend],
            backendOptions: {
                loadPath: "./locales/{{lng}}/translations.json",
            },
        },
        react: {
            useSuspense: false,
            wait: true,
        },
    });

export default i18n;