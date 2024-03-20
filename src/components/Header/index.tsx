import React from "react";
import { Box, Text } from "../../theme";
import { BackButton } from "../BackButton";
import { HeaderProps } from "../../@types/HeaderProps";
import { AboutUser } from "../AboutUser";
import { Brand } from "../Brand";

export function Header({ title, backButton, aboutUser, brand }: HeaderProps) {
  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="xl">
      {(backButton && <BackButton />) ?? (brand && <Brand />) ?? <Box />}
      <Text variant="header">{title}</Text>
      {(aboutUser && <AboutUser />) ?? <Box />}
    </Box>
  );
}
