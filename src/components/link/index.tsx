import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type LinkProps = {
  name: string;
  url: string;
  onDetailsPress: () => void;
};

export function Link(props: LinkProps) {
  const { name, url, onDetailsPress } = props;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.url} numberOfLines={1}>
          {url}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onDetailsPress}
        style={{
          padding: 6,
        }}
      >
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
