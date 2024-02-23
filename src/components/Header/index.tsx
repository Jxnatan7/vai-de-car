import {Box, Text} from "../../theme";
import {BackButton} from "../BackButton";
import {HeaderProps} from "../../@types/HeaderProps";

export function Header({title, backButton, navigation}: HeaderProps) {
  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="xl">
      {(backButton && <BackButton navigation={navigation} />) ?? <Box />}
      <Text variant="header">{title}</Text>
      <Box />
    </Box>
  );
}
