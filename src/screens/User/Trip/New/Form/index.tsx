import React, { useState } from "react";
import { Box, Text } from "../../../../../theme";
import { ScrollView } from "react-native";
import { LocationInput } from "../../../../../components/LocationInput";
import { TextInfo } from "../../../../../components/TextInfo";
import { InputRadio } from "../../../../../components/InputRadio";
import { MainButton } from "../../../../../components/MainButton";

export function NewTripForm() {

    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    return (
        <ScrollView style={{ width: "100%" }}>
            <Box alignItems="center" gap="m" mt="m">
                <LocationInput placeholder="Onde você está?" />
                <LocationInput placeholder="Para onde você quer ir?" />
            </Box>
            <TextInfo text="Prefere viajar de carro ou de moto?" />
            <InputRadio
                label="Carro - Até quatro pessoas"
                selected={selectedOption === 0}
                onSelect={() => setSelectedOption(0)}
            />
            <InputRadio
                label="Moto - Até uma pessoa"
                selected={selectedOption === 1}
                onSelect={() => setSelectedOption(1)}
            />
            <MainButton action={() => ""} bg="btn_dark" color="text_light" text="Buscar viagem" marginTop="xl" />
        </ScrollView>
    );
}