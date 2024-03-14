import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapContainer } from "../MapContainer";
import { LayoutPropsProps } from "../../@types/LayoutProps";
import BoxContainer from "../BoxContainer";

export function Layout({
  children,
  headerTitle,
  backButton,
  isMap,
  aboutUser
}: LayoutPropsProps) {
  return (
    <SafeAreaView>
      {isMap ? (
        <MapContainer backButton={backButton}>{children}</MapContainer>
      ) : (
        <BoxContainer headerTitle={headerTitle} backButton={backButton} aboutUser={aboutUser}>
          {children}
        </BoxContainer>
      )}
    </SafeAreaView>
  );
}
