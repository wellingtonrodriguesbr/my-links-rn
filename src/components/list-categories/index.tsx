import { FlatList } from "react-native";
import { categories } from "@/utils/categories";
import { Category } from "@/components/category";

import { styles } from "./styles";

export function ListCategories() {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Category {...item} isSelected={false} />}
    />
  );
}
