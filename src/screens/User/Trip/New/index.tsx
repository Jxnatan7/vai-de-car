import React from "react";

import { ScrollView } from "react-native";
import { Layout } from "../../../../components/Layout";
import { NewTripProps } from "../../../../@types/NewTripProps";
import { Box } from "../../../../theme";
import { NewTripForm } from "./Form";

export default function NewTrip({ navigation }: NewTripProps) {
  return (
    <Layout backButton isMap navigation={navigation}>
      <NewTripForm />
    </Layout>
  );
}
