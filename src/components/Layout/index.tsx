import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapContainer } from "../MapContainer";
import { LayoutPropsProps } from "../../@types/LayoutProps";
import BoxContainer from "../BoxContainer";

export function Layout({
  children,
  headerTitle,
  navigation,
  backButton,
  isMap,
}: LayoutPropsProps) {
  return (
    <SafeAreaView>
      {isMap ? (
        <MapContainer navigation={navigation}>
          {children}
        </MapContainer>
      ) : (
        <BoxContainer headerTitle={headerTitle} navigation={navigation} backButton={backButton}>
          {children}
        </BoxContainer>
      )}
    </SafeAreaView>
  );
}
