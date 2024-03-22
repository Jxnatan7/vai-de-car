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
import { useForm } from "react-hook-form";
import api, { configureAxios } from "../../../../../config/axiosConfig";
import { storage } from "../../../../../config/storage";
import { InfoTitle } from "../../../../../components/InfoTitle";
import { HttpStatusCode } from "axios";

type FormData = {
  latitudeFrom: number;
  longitudeFrom: number;
  latitudeTo: number;
  longitudeTo: number;
  price: number;
};

export default function ConfirmTrip({ route }: { route: any }) {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "TRIP_CAR",
  );

  const routePickupParams = route?.params?.locationData?.from;
  const routeDestinationParams = route?.params?.locationData?.to;

  const pickupLocation = {
    latitude: routePickupParams?.latitude,
    longitude: routePickupParams?.longitude,
    stringAddress: routePickupParams?.stringAddress,
  };

  const destinationLocation = {
    latitude: routeDestinationParams?.latitude,
    longitude: routeDestinationParams?.longitude,
    stringAddress: routeDestinationParams?.stringAddress,
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      latitudeFrom: pickupLocation.latitude,
      longitudeFrom: pickupLocation.longitude,
      latitudeTo: destinationLocation.latitude,
      longitudeTo: destinationLocation.latitude,
      price: selectedOption === "TRIP_CAR" ? 10 : 5,
    },
  });

  const onSubmit = (data: FormData) => {
    configureAxios(`${storage.getString("user.token")}`);
    api.post("/trip", data)
      .then(function (response) {
        if (response.status === HttpStatusCode.Created) {
          console.log(response.data);
          storage.set("trip.id", response.data);
          // @ts-ignore
          navigation.navigate("trip");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout backButton headerTitle="Confirme a viagem">
      <Box width="100%" height="100%">
        <Box mt="s" />
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
          selected={selectedOption === "TRIP_CAR"}
          onSelect={() => setSelectedOption("TRIP_CAR")}
        />
        <InputRadio
          label="Moto - Até uma pessoa"
          selected={selectedOption === "TRIP_MOTOCYCLE"}
          onSelect={() => setSelectedOption("TRIP_MOTOCYCLE")}
        />
        <Box mt="l" />
        <Text fontSize={16} fontWeight="bold" color="text_dark">
          Valor da corrida:
        </Text>
        <Text fontSize={20} fontWeight="bold" color="text_success">
          {selectedOption === "TRIP_CAR" ? "R$10,00" : "R$5,00"}
        </Text>
        <Box mt="xxl" />
        <MainButton
          action={handleSubmit(onSubmit)}
          bg="btn_dark"
          color="text_light"
          text="CONFIRMAR VIAGEM"
          marginTop="xxl"
        />
      </Box>
    </Layout>
  );
}
