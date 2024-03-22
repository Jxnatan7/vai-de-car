import React from "react";
import { useState } from "react";
import { Box } from "../../../../../theme";
import { LocationInput } from "../../../../../components/LocationInput";
import { MainButton } from "../../../../../components/MainButton";
import { NewTripFormProps } from "../../../../../@types/NewTripFormProps";
import { useNavigation } from "@react-navigation/native";
import { useLocation } from "../../../../../context/LocationContext";
import { ScrollView } from 'react-native-virtualized-view';
import { fetchGoogleMapsData } from "../../../../../services/FetchGoogleMapsAPI";
import { TextInfo } from "../../../../../components/TextInfo";

export function NewTripForm({ fetchLocationData, scrollDown }: NewTripFormProps) {
  const navigation = useNavigation();
  const location = useLocation();

  if (location === null) {
    return <TextInfo text="Obtendo localização..." />;
  }

  const [useCurrentAddress, setUseCurrentAddress] = useState<boolean | null>(null);
  const [doneAddress, setDoneAddress] = useState<boolean>(false);

  const [pickupAddressString, setPickupAddressString] = useState("");
  const [destinationAddressString, setDestinationAddressString] = useState("");

  const [state, setState] = useState({
    pickupCords: {},
    destinationCords: {},
  });

  const currentAddress = () => {
    setState({
      ...state,
      pickupCords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    });
    setUseCurrentAddress(true);
    fetchGoogleMapsData(location.coords.latitude, location.coords.longitude)
      .then((data) => {
        setPickupAddressString(data.results[0].formatted_address);
      })
      .catch((error) => {
        console.error('Erro ao acessar a API do Google Maps:', error.message);
      });
  };

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
      {
        useCurrentAddress === null && (
          <Box
            flex={1}
            width="100%"
            height={300}
            alignItems="center"
          >
            <MainButton
              action={() => currentAddress()}
              bg="blue"
              color="text_light"
              text="Quero usar a minha localização atual"
            />
            <MainButton
              action={() => setUseCurrentAddress(false)}
              bg="dark_gray"
              color="text_light"
              text="Buscar outro endereço"
              marginTop="m"
            />
          </Box>
        )
      }
      {doneAddress && (
        <Box
          flex={1}
          width="100%"
          height={300}
          alignItems="center"
        >
          <MainButton
            action={() =>
              // @ts-ignore
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
        </Box>
      )}
      {
        useCurrentAddress ? (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{ width: "100%", flex: 1, height: 300 }}
            contentContainerStyle={{ alignItems: "center" }}>
            <Box mb="m" />
            <LocationInput
              fetchAddress={fetchDestinationCords}
              placeholder="Para onde você quer ir?"
            />
            <MainButton
              action={onDone}
              bg="btn_dark"
              color="text_light"
              text="Próximo"
              marginTop="m"
            />
          </ScrollView>
        )
          :
          (
            <ScrollView
              keyboardShouldPersistTaps="handled"
              style={{ width: "100%", flex: 1, height: 300 }}
              contentContainerStyle={{ alignItems: "center" }}>
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
          )
      }
    </Box>
  );
}
