import React from "react";
import {Box, Text} from "../../theme";
import {TextInfoProps} from "../../@types/TextInfoProps";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

export function TextInfo({text, color, marginTop, icon}: TextInfoProps) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap="s"
      pb="l"
      mt={marginTop ?? "l"}>
      <FontAwesomeIcon icon={icon} color={color} size={16} />
      <Text color={color ?? "text_dark"} fontSize={16} fontWeight="bold">
        {text}
      </Text>
    </Box>
  );
}
