import { useState } from "react";
import { createBox, createText, useTheme } from "@shopify/restyle";

import { ThemeProps } from "../../../../theme";

import { Header } from "../../../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "../../../../components/Container";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from "react-native";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "../../../../components/InputRadio";
import { BackButton } from "../../../../components/BackButton";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export default function Register({ navigation }: { navigation: any }) {
    const theme = useTheme<ThemeProps>()

    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    return (
        <SafeAreaView>
            <Container>
                <Header title="Seu veículo" leftAction={<BackButton navigation={navigation} />} />
                <Box flex={1} justifyContent="space-between">
                    <ScrollView style={{ flex: 1, paddingVertical: theme.spacing.l }}>
                        <Text mb="l" color="text_dark" fontSize={16} fontWeight="bold">
                            Qual é o tipo de veículo?
                        </Text>
                        <RadioButton
                            label="Carro"
                            selected={selectedOption === 0}
                            onSelect={() => setSelectedOption(0)}
                        />
                        <RadioButton
                            label="Moto"
                            selected={selectedOption === 1}
                            onSelect={() => setSelectedOption(1)}
                        />
                        <Input placeholder="Modelo" />
                        <Input placeholder="Cor" />
                        <Input placeholder="Placa" />
                    </ScrollView>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
                        enabled>
                        <Box alignItems="center" marginTop="l">
                            <Box marginBottom="s">
                                <Button action={() => navigation.navigate("automobile-register")} bg="btn_dark" color="text_light" text="Concluir Cadastro" />
                            </Box>
                        </Box>
                    </KeyboardAvoidingView>
                </Box>
            </Container>
        </SafeAreaView>
    );
}
