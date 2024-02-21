import { createBox, createText, useTheme } from "@shopify/restyle";

import { ThemeProps } from "../../theme";

import { Header } from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../../components/BackButton";
import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Login({ navigation }: { navigation: any }) {
  const theme = useTheme<ThemeProps>()
  return (
    <SafeAreaView>
      <Container>
        <Header title="Entrar" leftAction={<BackButton navigation={navigation} />} />
        <Box flex={1} justifyContent="space-between">
          <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
          </ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            enabled>
            <Box alignItems="center" marginTop="l">
              <Box marginBottom="s">
                <Button action={() => navigation.navigate("")} bg="btn_dark" color="text_light" text="Acessar conta" />
              </Box>
              <TouchableOpacity activeOpacity={0.8} onPress={() => ""}>
                <Text color="text_orange" fontWeight="bold">Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </Box>
          </KeyboardAvoidingView>
        </Box>
      </Container>
    </SafeAreaView>
  );
}