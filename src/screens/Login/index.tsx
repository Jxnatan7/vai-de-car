import {useTheme} from "@shopify/restyle";

import {Box, Text, ThemeProps} from "../../theme";

import {Layout} from "../../components/Layout";
import {Input} from "../../components/Input";
import {MainButton} from "../../components/MainButton";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {LoginProps} from "../../@types/LoginProps";

export default function Login({navigation}: LoginProps) {
  const theme = useTheme<ThemeProps>();
  return (
    <Layout backButton headerTitle="Entrar" navigation={navigation}>
      <Box flex={1} justifyContent="space-between">
        <ScrollView style={{flex: 1, paddingVertical: theme.spacing.l}}>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          enabled>
          <Box alignItems="center" marginTop="l">
            <Box marginBottom="s">
              <MainButton
                action={() => navigation.navigate("new-trip")}
                bg="btn_dark"
                color="text_light"
                text="Acessar conta"
              />
            </Box>
            <TouchableOpacity activeOpacity={0.8} onPress={() => ""}>
              <Text color="text_orange" fontWeight="bold">
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </Layout>
  );
}
