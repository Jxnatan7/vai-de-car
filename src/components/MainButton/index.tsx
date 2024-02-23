import React from "react";
import { Box, Text, ThemeProps } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native";
import { MainButtonProps } from "../../@types/MainButton";
import { useTheme } from "@shopify/restyle";


export function MainButton({ text, color, bg, icon, action, marginTop }: MainButtonProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={action}>
      <Box
        bg={bg}
        width={340}
        height={50}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        borderRadius={100}
        marginTop={marginTop}
      >
        <Box>
          <Text variant="button" color={color}>
            {text}
          </Text>
        </Box>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            color="#FFF"
            size={20}
            style={{ marginLeft: 20 }}
          />
        )}
      </Box>
    </TouchableOpacity>
  );
}
