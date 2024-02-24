import React from "react";
import { useState } from "react";
import { Box } from "../../../../../theme";
import { LocationInput } from "../../../../../components/LocationInput";
import { TextInfo } from "../../../../../components/TextInfo";
import { InputRadio } from "../../../../../components/InputRadio";
import { MainButton } from "../../../../../components/MainButton";
import { ScrollView } from "react-native-gesture-handler";
import { NewTripFormProps } from "../../../../../@types/NewTripFormProps";

export function NewTripForm({ fetchLocationData }: NewTripFormProps) {

    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const [state, setState] = useState({
        pickupCords: {},
        destinationCords: {}
    });

    const onDone = () => {
        fetchLocationData(state);
    };

    const fetchAddressCords = (latitude: number, longitude: number) => {
        setState({
            ...state,
            pickupCords: {
                latitude,
                longitude
            }
        });
    };

    const fetchDestinationCords = (latitude: number, longitude: number) => {
        setState({
            ...state,
            destinationCords: {
                latitude,
                longitude
            }
        });
    };

    return (
        <Box width="100%" height="100%" justifyContent="space-around">
            <ScrollView keyboardShouldPersistTaps="handled" style={{ width: "100%", flex: 1, height: 300 }} contentContainerStyle={{ alignItems: "center" }}>
                <LocationInput
                    fetchAddress={fetchAddressCords}
                    placeholder="Onde você está?"
                />
                <Box mb="m" />
                <LocationInput
                    fetchAddress={fetchDestinationCords}
                    placeholder="Para onde você quer ir?"
                />
                <MainButton action={() => onDone()} bg="btn_dark" color="text_light" text="Buscar viagem" marginTop="exaggerated" />
            </ScrollView>
        </Box>
    );
}