import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

/*
By importing the 'i18n' instance from the 'i18next' core, we can bind the 'react-i18next' module to it via the 'initReactI18next' object provided by the module. This ensures that the 'i18next' framework passes the 'i18n' instance to the 'react-i18next' module.
*/
i18n
    .use(Backend) //use() function loads and binds any plugins to the 'i18n' instance
    .use(initReactI18next)
    .use(LanguageDetector)
    /*
    Basic configarations in the init() function:
    ` fallbackLng: "en" ` if no language can be detected, the website will use English as default.
    */

    .init({
        fallbackLng: "en",
        detection:{
            order:["path","localStorage","htmlTag","cookie"], //Language detection will follow the 'order' array 
            caches:["localStorage","cookie"] //cache user language on
        }
    });

export default i18n;