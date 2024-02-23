import { useTheme } from "@shopify/restyle";

import { Box, Text, ThemeProps } from "../../../theme";
import { Layout } from "../../../components/Layout";
import { Input } from "../../../components/Input";
import { MainButton } from "../../../components/MainButton";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SignUpUserProps } from "../../../@types/SignUpUserProps";

export default function SignUp({ navigation }: SignUpUserProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <Layout backButton headerTitle="Sobre você" navigation={navigation}>
      <Box flex={1} justifyContent="space-between">
        <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
          <Input placeholder="Nome" />
          <Input placeholder="CPF" />
          <Input placeholder="Email" />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("driver-signup")}>
            <Box mb="xl" flexDirection="row" alignItems="center">
              <Text
                fontSize={16}
                color="text_orange"
                pr="s"
              >
                Quero me cadastrar como
              </Text>
              <Text
                color="text_orange"
                fontSize={16}
                fontWeight="bold">
                Motorista
              </Text>
            </Box>
          </TouchableOpacity>
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          enabled>
          <Box alignItems="center" marginTop="l">
            <Box marginBottom="s">
              <MainButton
                action={() => console.log("TESTE")}
                bg="btn_dark"
                color="text_light"
                text="Criar conta"
              />
            </Box>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}>
              <Text color="text_orange" fontWeight="bold">
                Acessar conta existente
              </Text>
            </TouchableOpacity>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Layout>
  );
}
