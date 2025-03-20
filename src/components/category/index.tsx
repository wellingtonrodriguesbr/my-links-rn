import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CategoryType } from "@/utils/categories";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

type CategoryProps = PressableProps &
  CategoryType & {
    isSelected: boolean;
  };

export function Category(props: CategoryProps) {
  const { categoryName, icon, isSelected, ...rest } = props;
  const color = isSelected ? colors.green[300] : colors.gray[400];

  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{categoryName}</Text>
    </Pressable>
  );
}
