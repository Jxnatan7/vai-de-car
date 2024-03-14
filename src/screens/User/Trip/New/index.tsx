import React from "react";

import { Layout } from "../../../../components/Layout";
import { NewTripForm } from "./Form";
import { storage } from "../../../../config/storage";

export default function NewTrip() {
  return (
    <Layout isMap>
      <NewTripForm
        fetchLocationData={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Layout>
  );
}
