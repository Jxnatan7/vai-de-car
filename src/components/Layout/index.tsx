import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapContainer } from "../MapContainer";
import { LayoutProps } from "../../@types/LayoutProps";
import BoxContainer from "../BoxContainer";

export function Layout({
  children,
  headerTitle,
  backButton,
  isMap,
  aboutUser,
  brand,
  dontUseGeoLocation
}: LayoutProps) {

  return (
    <SafeAreaView>
      {isMap ? (
        <MapContainer backButton={backButton} dontUseGeoLocation={dontUseGeoLocation}>{children}</MapContainer>
      ) : (
        <BoxContainer aboutUser={aboutUser} backButton={backButton} headerTitle={headerTitle} brand={brand}>
          {children}
        </BoxContainer>
      )}
    </SafeAreaView>
  );
}
