import React from "react";
import {useTheme} from "@shopify/restyle";
import {ThemeProps} from "../../theme";
import {TextInput} from "react-native";
import {InputProps} from "../../@types/InputProps";

export function Input({
  placeholder,
  onBlur,
  onChange,
  value,
  type,
}: InputProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      inputMode={type}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text_gray}
      style={{
        width: "100%",
        height: 50,
        backgroundColor: theme.colors.light_gray,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: 8,
        padding: theme.spacing.s,
        marginBottom: theme.spacing.l,
        fontSize: 16,
        color: theme.colors.text_dark,
      }}
    />
  );
}
