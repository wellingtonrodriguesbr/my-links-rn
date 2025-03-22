import { FlatList } from "react-native";
import { categories, CategoryType } from "@/utils/categories";
import { Category } from "@/components/category";

import { styles } from "./styles";

type ListCategoriesProps = {
  selectedCategory: string;
  onSelectedCategory: (category: string) => void;
};

export function ListCategories(props: ListCategoriesProps) {
  const { selectedCategory, onSelectedCategory } = props;
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          {...item}
          onPress={() => onSelectedCategory(item.categoryName)}
          isSelected={item.categoryName === selectedCategory}
        />
      )}
    />
  );
}
