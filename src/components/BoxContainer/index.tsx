import React from "react";
import { BoxContainerProps } from "../../@types/BoxContainerProps";
import { Box } from "../../theme";
import { Header } from "../Header";

export default function BoxContainer({
  children,
  aboutUser,
  backButton,
  headerTitle,
  brand
}: BoxContainerProps) {
  return (
    <Box
      width="100%"
      backgroundColor="bg_light"
      height="100%"
      p="l"
      alignItems="center">
      <Header aboutUser={aboutUser} backButton={backButton} title={headerTitle} brand={brand} />
      {children}
    </Box>
  );
}
