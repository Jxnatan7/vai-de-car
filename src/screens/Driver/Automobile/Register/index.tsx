import { useState } from "react";

import { Box, Text, ThemeProps } from "../../../../theme";

import { Layout } from "../../../../components/Layout";
import { Input } from "../../../../components/Input";
import { MainButton } from "../../../../components/MainButton";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { InputRadio } from "../../../../components/InputRadio";
import { useTheme } from "@shopify/restyle";
import { RegisterAutomobileProps } from "../../../../@types/RegisterAutomobileProps";

export default function Register({ navigation }: RegisterAutomobileProps) {
  const theme = useTheme<ThemeProps>();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <Layout backButton headerTitle="Seu veículo" navigation={navigation}>
      <Box flex={1} justifyContent="space-between">
        <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
          <Text mb="l" color="text_dark" fontSize={16} fontWeight="bold">
            Qual é o tipo de veículo?
          </Text>
          <InputRadio
            label="Carro"
            selected={selectedOption === 0}
            onSelect={() => setSelectedOption(0)}
          />
          <InputRadio
            label="Moto"
            selected={selectedOption === 1}
            onSelect={() => setSelectedOption(1)}
          />
          <Input placeholder="Modelo" />
          <Input placeholder="Cor" />
          <Input placeholder="Placa" />
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          enabled>
          <Box alignItems="center" marginTop="l">
            <Box marginBottom="s">
              <MainButton
                action={() => navigation.navigate("automobile-register")}
                bg="btn_dark"
                color="text_light"
                text="Concluir Cadastro"
              />
            </Box>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Layout>
  );
}
