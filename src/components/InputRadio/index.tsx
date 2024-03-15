import React from "react";
import {useTheme} from "@shopify/restyle";
import {Box, Text, ThemeProps} from "../../theme";
import {TouchableOpacity} from "react-native";
import {InputRadioProps} from "../../@types/InputRadioProps";

export function InputRadio({label, selected, onSelect}: InputRadioProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{paddingBottom: theme.spacing.l}}>
      <Box flexDirection="row" alignItems="center">
        <Box
          width={20}
          height={20}
          borderRadius={100}
          borderWidth={1}
          borderColor="dark_gray"
          alignItems="center"
          justifyContent="center"
          marginRight="m">
          {selected && (
            <Box
              width={10}
              height={10}
              borderRadius={100}
              backgroundColor="dark_gray"
            />
          )}
        </Box>
        <Text>{label}</Text>
      </Box>
    </TouchableOpacity>
  );
}
