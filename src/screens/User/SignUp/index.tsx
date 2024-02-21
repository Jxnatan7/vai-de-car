import { createBox, createText, useTheme } from "@shopify/restyle";

import { ThemeProps } from "../../../theme";

import { Header } from "../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "../../../components/BackButton";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from "react-native";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function SignUp({ navigation }: { navigation: any }) {
    const theme = useTheme<ThemeProps>()
    return (
        <SafeAreaView>
            <Container>
                <Header title="Sobre você" leftAction={<BackButton navigation={navigation} />} />
                <Box flex={1} justifyContent="space-between">
                    <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
                        <Input placeholder="Nome" />
                        <Input placeholder="CPF" />
                        <Input placeholder="Email" />
                        <Input placeholder="Telefone" />
                        <Input placeholder="Senha" />
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("driver-signup")}>
                            <Box mb="xl" flexDirection="row" alignItems="center">
                                <Text fontSize={16} color="text_orange" textDecorationLine="underline">
                                    Quero me cadastrar como
                                </Text>
                                <Text textDecorationLine="underline" color="text_orange" fontSize={16} fontWeight="bold"> Motorista </Text>
                            </Box>
                        </TouchableOpacity>
                    </ScrollView>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
                        enabled>
                        <Box alignItems="center" marginTop="l">
                            <Box marginBottom="s">
                                <Button action={() => console.log("TESTE")} bg="btn_dark" color="text_light" text="Criar conta" />
                            </Box>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("login")}>
                                <Text color="text_orange" fontWeight="bold">Acessar conta existente</Text>
                            </TouchableOpacity>
                        </Box>
                    </KeyboardAvoidingView>
                </Box>
            </Container>
        </SafeAreaView>
    );
}
