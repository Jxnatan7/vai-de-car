import {useTheme} from "@shopify/restyle";
import {TextInput} from "react-native";
import {ThemeProps} from "../../theme";

type LocationInputProps = {
  placeholder: string;
};

export function LocationInput({placeholder}: LocationInputProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text_gray}
      style={{
        width: "100%",
        height: 50,
        backgroundColor: theme.colors.light_gray,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: 100,
        paddingHorizontal: theme.spacing.l,
        fontSize: 16,
        color: theme.colors.text_dark,
      }}
    />
  );
}
