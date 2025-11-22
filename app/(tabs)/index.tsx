import LoadingModal from "@/components/LoadingModal";
import ProductsList from "@/components/ProductsList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, I18nManager, NativeModules, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function index() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const changeLanguage = async (lang: string) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        await i18n.changeLanguage(lang);
        await AsyncStorage.setItem('language', lang);
        I18nManager.allowRTL(lang === 'ar');
        I18nManager.forceRTL(lang === 'ar');
        NativeModules.DevSettings.reload();

      } catch (error) {
        console.log(error);
      }
    }, 2000);

  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoadingModal visible={loading} />
      <View style={{ flexDirection:"row" }}><Text style={{ textAlign: "left" }}>{t("specialized_welcome", { name: "John", age: 20 })}</Text></View>
      <Text>{t("cart_items", { count: 1 })}</Text>
      <Button title="English" onPress={() => changeLanguage("en")} />
      <Button title="Arabic" onPress={() => changeLanguage("ar")} />
      <ProductsList />
    </SafeAreaView>
  );
}
