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
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SignUpDriverProps } from "../../../@types/SignUpDriverProps";

export default function SignUp({ navigation }: SignUpDriverProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <Layout backButton headerTitle="Sobre você" navigation={navigation}>
      <Box flex={1} justifyContent="space-between">
        <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
          <Input placeholder="Nome" />
          <Input placeholder="CPF" />
          <Input placeholder="CNH" />
          <Input placeholder="Email" />
          <Input placeholder="Telefone" />
          <Input placeholder="Senha" />
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          enabled>
          <Box alignItems="center" marginTop="l">
            <Box marginBottom="s">
              <MainButton
                action={() => navigation.navigate("automobile-register")}
                icon={faArrowRight}
                bg="btn_dark"
                color="text_light"
                text="Próximo"
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
