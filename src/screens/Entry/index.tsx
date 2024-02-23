import { MainButton } from "../../components/MainButton";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../theme";

export default function Entry({ navigation }: { navigation: any }) {
  return (
    <Box
      flex={1}
      backgroundColor="bg_light"
      justifyContent="center"
      alignItems="center">
      <Text variant="mainH2">vai de</Text>
      <Text variant="mainH1">CAR!</Text>
      <Box
        bg="bg_orange"
        width="100%"
        height={160}
        position="absolute"
        bottom={0}>
        <Box
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          gap="s">
          <MainButton
            action={() => navigation.navigate("login")}
            icon={faArrowRight}
            bg="btn_dark"
            color="text_light"
            text="Acessar conta"
          />
          <Box flexDirection="row" alignItems="center">
            <Text variant="info" pr="s">
              Não possui uma conta?
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("user-signup")}>
              <Text
                style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
                crie uma agora
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
