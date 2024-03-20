import React from "react";

import { MainButton } from "../../components/MainButton";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "../../theme";
import { storage } from "../../config/storage";
import { useNavigation } from "@react-navigation/native";

export default function Entry() {
  const navigation = useNavigation();

  const userIsAuthenticated = () => {
    if (storage.getString("user.token") === undefined) {
      //@ts-ignore
      navigation.navigate("login");
      return;
    }
    //@ts-ignore
    navigation.navigate("user-home");
  };

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
            action={userIsAuthenticated}
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
