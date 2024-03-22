import React from "react";

import { Layout } from "../../../../components/Layout";
import { NewTripForm } from "./Form";

export default function NewTrip() {
  return (
    <Layout isMap backButton>
      <NewTripForm
        fetchLocationData={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Layout>
  );
}
