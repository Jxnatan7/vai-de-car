import React, { useState } from "react";
import { Layout } from "../../../../../components/Layout";
import { Box, Text } from "../../../../../theme";
import { TextInfo } from "../../../../../components/TextInfo";
import {
  faCar,
  faLocationArrow,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { InputRadio } from "../../../../../components/InputRadio";
import { MainButton } from "../../../../../components/MainButton";
import { useNavigation } from "@react-navigation/native";

const InfoTitle = ({ text }: { text: string }) => {
  return <Text color="very_dark_gray">{text}</Text>;
};

export default function ConfirmTrip({ route }) {
  const routePickupParams = route?.params?.locationData?.from;
  const routeDestinationParams = route?.params?.locationData?.to;

  console.log(routePickupParams);

  const pickupLocation = {
    latitude: routePickupParams?.latitude,
    longitude: routePickupParams?.longitude,
    stringAddress: routePickupParams?.stringAddress
  }

  const destinationLocation = {
    latitude: routeDestinationParams?.latitude,
    longitude: routeDestinationParams?.longitude,
    stringAddress: routeDestinationParams?.stringAddress
  };

  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<number | null>(0);
  return (
    <Layout backButton headerTitle="Confirme a viagem">
      <Box width="100%" height="100%">
        <Box mt="xxl" />
        <InfoTitle text="Saindo de:" />
        <TextInfo
          text={pickupLocation.stringAddress}
          color="blue"
          marginTop="m"
          icon={faLocationArrow}
        />
        <Box mt="l" />
        <InfoTitle text="A caminho de:" />
        <TextInfo
          text={destinationLocation.stringAddress}
          color="black"
          marginTop="m"
          icon={faLocationDot}
        />
        <Box mt="l" />
        <TextInfo
          text="Prefere viajar de carro ou de moto?"
          color="black"
          icon={faCar}
        />
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
        <Box mt="l" />
        <Text fontSize={16} fontWeight="bold" color="text_dark">
          Valor da corrida:
        </Text>
        <Text fontSize={20} fontWeight="bold" color="text_success">
          {selectedOption === 0 ? "R$10,00" : "R$5,00"}
        </Text>
        <Box mt="xxl" />
        <MainButton
          action={() => navigation.navigate("trip")}
          bg="btn_dark"
          color="text_light"
          text="CONFIRMAR VIAGEM"
          marginTop="xxl"
        />
      </Box>
    </Layout>
  );
}
