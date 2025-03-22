import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  loading: boolean;
};

export function Button(props: ButtonProps) {
  const { text, loading, ...rest } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={styles.container}
      activeOpacity={0.7}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator style={styles.loading} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
