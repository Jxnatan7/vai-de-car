import React, { useEffect, useState } from "react";
import { Box } from "../../theme";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { BottomSheet } from "../BottomSheet";
import { BackButton } from "../BackButton";
import { MapContainerProps } from "../../@types/MapContainerProps";
import { fetchLocationDataProps } from "../../@types/NewTripFormProps";
import { google_api_key } from "../../config/index.json";
import MapViewDirections from "react-native-maps-directions";
import { useLocation } from "../../context/LocationContext";
import { TextInfo } from "../TextInfo";

export function MapContainer({ children, backButton }: MapContainerProps) {
  const location = useLocation();

  if (!location) {
    return <TextInfo text="Obtendo localização..." />;
  }

  const [state, setState] = useState({
    startingCords: {
      latitude: 0,
      longitude: 0,
    },
    destinationCords: {
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    if (location) {
      setState({
        startingCords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        destinationCords: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      });
    }
  }, [location]);

  const { startingCords, destinationCords } = state;

  const fetchLocationData = (data: fetchLocationDataProps) => {
    setState({
      startingCords: data.pickupCords,
      destinationCords: data.destinationCords,
    });
  };

  console.log(state);

  return (
    <Box
      width="100%"
      height="100%"
      justifyContent="flex-end"
      alignItems="center">
      <Box
        width={50}
        height={50}
        position="absolute"
        top={0}
        left={0}
        zIndex={9999}
        p="s">
        {
          backButton && (
            <Box
              width="100%"
              height="100%"
              bg="bg_light"
              borderRadius={50}
              justifyContent="center"
              alignItems="center">
              <BackButton />
            </Box>
          )
        }
      </Box>
      {location && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            flex: 1,
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          region={{
            latitude: startingCords.latitude,
            longitude: startingCords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}>
          <MapViewDirections
            origin={{
              latitude: startingCords.latitude,
              longitude: startingCords.longitude,
            }}
            destination={{
              latitude: destinationCords.latitude,
              longitude: destinationCords.longitude,
            }}
            apikey={google_api_key}
            strokeWidth={6}
            strokeColor="hotpink"
          />
          <Marker
            coordinate={{
              latitude: startingCords.latitude,
              longitude: startingCords.longitude,
            }}
          />
          <Marker
            coordinate={{
              latitude: destinationCords.latitude,
              longitude: destinationCords.longitude,
            }}
          />
        </MapView>
      )}
      <BottomSheet>
        {React.cloneElement(children, { fetchLocationData })}
      </BottomSheet>
    </Box>
  );
}
