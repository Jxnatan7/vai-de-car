import React from "react";
import {useTheme} from "@shopify/restyle";
import {ThemeProps} from "../../theme";
import {
  GooglePlacesAutocomplete,
  GooglePlaceData,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import {google_api_key} from "../../config/index.json";
import {LocationInputProps} from "../../@types/LocationInputProps";

export function LocationInput({placeholder, fetchAddress}: LocationInputProps) {
  const theme = useTheme<ThemeProps>();
  const onPressAddress = (
    data: GooglePlaceData | null,
    details: GooglePlaceDetail | null,
  ) => {
    const latitude = details?.geometry.location.lat;
    const longitude = details?.geometry.location.lng;
    const formattedAddress = details?.formatted_address;
    fetchAddress(latitude, longitude, formattedAddress);
  };
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      onPress={onPressAddress}
      fetchDetails={true}
      query={{
        key: google_api_key,
        language: "pt-BR",
      }}
      styles={{
        container: {
          width: "100%",
        },
        textInputContainer: {
          backgroundColor: theme.colors.light_gray,
          borderWidth: 1,
          borderColor: theme.colors.gray,
          borderRadius: 10,
          paddingHorizontal: theme.spacing.s,
        },
        textInput: {
          height: 50,
          fontSize: 16,
          backgroundColor: theme.colors.light_gray,
          color: theme.colors.text_dark,
        },
        predefinedPlacesDescription: {
          color: "#1faadb",
        },
      }}
    />
  );
}
