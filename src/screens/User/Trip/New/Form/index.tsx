import React from "react";
import {useState} from "react";
import {Box} from "../../../../../theme";
import {LocationInput} from "../../../../../components/LocationInput";
import {MainButton} from "../../../../../components/MainButton";
import {ScrollView} from "react-native-gesture-handler";
import {NewTripFormProps} from "../../../../../@types/NewTripFormProps";
import {useNavigation} from "@react-navigation/native";

export function NewTripForm({fetchLocationData, scrollDown}: NewTripFormProps) {
  const navigation = useNavigation();

  const [doneAddress, setDoneAddress] = useState<boolean>(false);

  const [pickupAddressString, setPickupAddressString] = useState("");
  const [destinationAddressString, setDestinationAddressString] = useState("");

  const [state, setState] = useState({
    pickupCords: {},
    destinationCords: {},
  });

  const onDone = () => {
    fetchLocationData(state);
    setDoneAddress(true);
    scrollDown();
  };

  const fetchAddressCords = (
    latitude: number,
    longitude: number,
    formattedAddress: string,
  ) => {
    setState({
      ...state,
      pickupCords: {
        latitude,
        longitude,
      },
    });
    setPickupAddressString(formattedAddress);
  };

  const fetchDestinationCords = (
    latitude: number,
    longitude: number,
    formattedAddress: string,
  ) => {
    setState({
      ...state,
      destinationCords: {
        latitude,
        longitude,
      },
    });
    setDestinationAddressString(formattedAddress);
  };

  return (
    <Box width="100%" height="100%" justifyContent="space-around">
      {doneAddress ? (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{width: "100%", flex: 1, height: 300}}
          contentContainerStyle={{alignItems: "center"}}>
          <MainButton
            action={() =>
              navigation.navigate("confirm-trip", {
                locationData: {
                  from: {
                    latitude: state.pickupCords?.latitude,
                    longitude: state.pickupCords?.longitude,
                    stringAddress: pickupAddressString,
                  },
                  to: {
                    latitude: state.destinationCords?.latitude,
                    longitude: state.destinationCords?.longitude,
                    stringAddress: destinationAddressString,
                  },
                },
              })
            }
            bg="blue"
            color="text_light"
            text="Confirmar endereço"
          />
          <MainButton
            action={() => setDoneAddress(false)}
            bg="dark_gray"
            color="text_light"
            text="Buscar outro endereço"
            marginTop="m"
          />
        </ScrollView>
      ) : (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{width: "100%", flex: 1, height: 300}}
          contentContainerStyle={{alignItems: "center"}}>
          <LocationInput
            fetchAddress={fetchAddressCords}
            placeholder="Onde você está?"
          />
          <Box mb="m" />
          <LocationInput
            fetchAddress={fetchDestinationCords}
            placeholder="Para onde você quer ir?"
          />
          <MainButton
            action={() => onDone()}
            bg="btn_dark"
            color="text_light"
            text="Próximo"
            marginTop="exaggerated"
          />
        </ScrollView>
      )}
    </Box>
  );
}

// Enviar dados do formulário de location, para a página final de confirmar corrida
