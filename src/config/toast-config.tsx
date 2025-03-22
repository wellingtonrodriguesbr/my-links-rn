import {
  ToastProps,
  SuccessToast,
  ErrorToast,
} from "react-native-toast-message";

import { colors } from "@/styles/colors";

export const toastConfig = {
  success: (props: ToastProps) => (
    <SuccessToast
      style={{
        backgroundColor: colors.green[200],
      }}
      {...props}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      style={{
        backgroundColor: colors.red[200],
        borderLeftColor: colors.red[500],
      }}
      {...props}
    />
  ),
};
