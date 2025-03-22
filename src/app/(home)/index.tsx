import { useCallback, useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { router, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

import { ListCategories } from "@/components/list-categories";
import { ListLinks } from "@/components/list-links";
import { getLinks, LinkStorage } from "@/storage/link-storage";
import { styles } from "./styles";

export default function App() {
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  async function handleGetLinks() {
    try {
      const links = await getLinks();
      const linksFiltered = selectedCategory
        ? links.filter((link) => link.category === selectedCategory)
        : links;
      setLinks(linksFiltered);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      handleGetLinks();
    }, [selectedCategory, links])
  );

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

      <ListCategories
        selectedCategory={selectedCategory}
        onSelectedCategory={setSelectedCategory}
      />
      <ListLinks links={links} />
    </View>
  );
}
