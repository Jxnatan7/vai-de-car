import { Box } from "../../theme";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React from "react";

export function MapContainer() {
  const latitude = -27.517353999320548;
  const longitude = -48.656403094377346;
  return (
    <Box
      width="100%"
      height="100%"
      borderWidth={1}
      borderColor="dark_gray">
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}>
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
      <Box position="absolute" left="50%" right={0} bg="bg_orange" width="95%" height={200} bottom={0}>

      </Box>
    </Box>
  );
}
