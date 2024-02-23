import React from "react";
import { Box } from "../../theme";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { BottomSheet } from "../BottomSheet";
import { BackButton } from "../BackButton";
import { MapContainerProps } from "../../@types/MapContainerProps";

export function MapContainer({ navigation, children }: MapContainerProps) {
  const latitude = -27.517353999320548;
  const longitude = -48.656403094377346;

  return (
    <Box
      width="100%"
      height="100%"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Box width={50} height={50} position="absolute" top={0} left={0} zIndex={9999} p="s">
        <Box width="100%" height="100%" bg="bg_light" borderRadius={50} justifyContent="center" alignItems="center">
          <BackButton navigation={navigation} />
        </Box>
      </Box>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          flex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}>
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
      <BottomSheet>
        {children}
      </BottomSheet>
    </Box>
  );
}
