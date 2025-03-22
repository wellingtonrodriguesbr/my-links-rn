import { Stack } from "expo-router";
import { colors } from "@/styles/colors";
import { View } from "react-native";

import Toast from "react-native-toast-message";
import { toastConfig } from "@/config/toast-config";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray[950] }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[950] },
          animation: "fade",
        }}
      />
      <Toast position="top" config={toastConfig} />
    </View>
  );
}
