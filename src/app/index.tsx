import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

import { ListCategories } from "@/components/list-categories";
import { ListLinks } from "@/components/list-links";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("@/assets/logo.png")} />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.navigate("/add")}
        >
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <ListCategories />
      <ListLinks links={[{ name: "Google", url: "https://google.com.br" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    marginBottom: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 32,
    width: 38,
  },
});
