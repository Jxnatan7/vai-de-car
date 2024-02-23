import { BoxContainerProps } from "../../@types/BoxContainerProps";
import { Box } from "../../theme";
import { Header } from "../Header";

export default function BoxContainer({
  children,
  headerTitle,
  navigation,
  backButton
}: BoxContainerProps) {
  return (
    <Box width="100%" backgroundColor="bg_light" height="100%" p="l">
      <Header title={headerTitle} backButton={backButton} navigation={navigation} />
      {children}
    </Box>
  );
}
