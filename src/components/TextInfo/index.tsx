import React from "react";
import { Box, Text, ThemeProps } from "../../theme";
import { TextInfoProps } from "../../@types/TextInfoProps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTheme } from "@shopify/restyle";

export function TextInfo({ text, color, marginTop, icon }: TextInfoProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap="s"
      pb="l"
      mt={marginTop ?? "l"}>
      {
        icon && color && (<FontAwesomeIcon icon={icon} color={theme.colors[color]} size={16} />)
      }
      <Text color={color ?? "text_dark"} fontSize={16} fontWeight="bold">
        {text}
      </Text>
    </Box>
  );
}
