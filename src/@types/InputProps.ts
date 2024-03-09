import {TextInputProps} from "react-native";

export type InputProps = {
  placeholder: string;
  onChange?: () => void;
  onBlur?: () => void;
  value?: string | number;
  type?: TextInputProps["inputMode"];
};
