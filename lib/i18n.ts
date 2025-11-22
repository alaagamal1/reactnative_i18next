import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

const language = Localization.getLocales()[0].languageCode;
const resources = {
    en: {
        translation: require("../locals/en.json")
    },
    ar: {
        translation: require("../locals/ar.json")
    }
}
i18n.use(initReactI18next).init({
    lng: language || "en",
    resources: resources
})

const getLanguage = async () => {
    const language = await AsyncStorage.getItem("language-name");
    if(language) {
        I18nManager.allowRTL(language === "ar");
        I18nManager.forceRTL(language === "ar");
        i18n.changeLanguage(language);
    }
}

getLanguage();