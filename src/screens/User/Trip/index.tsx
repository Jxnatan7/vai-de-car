import React, { useState } from "react";
import { Layout } from "../../../components/Layout";
import { Box } from "../../../theme";
import { TextInfo } from "../../../components/TextInfo";
import { ScrollView } from "react-native";
import { faCar, faLocationArrow, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { InfoTitle } from "../../../components/InfoTitle";
import { fetchLocationDataProps } from "../../../@types/NewTripFormProps";
import TripDetails from "./TripDetails";

export default function Trip() {
  //Primeiramente, mostrar o caminho entre o driver e o pickup, depois, entre o pickup e o destination

  return (
    <Layout isMap backButton>
      <TripDetails fetchLocationData={function (): void {
        throw new Error("Function not implemented.");
      }} />
    </Layout>
  );
}

// Trazer o pickup and destination coords
// Focar no MOTORISTA até ele chegar na pickupCoords
// pickup: -27.516923998203083, -48.65658909126399
// destination: -27.531870780217666, -48.63302136266485