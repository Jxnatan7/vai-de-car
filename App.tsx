import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { enableLatestRenderer } from "react-native-maps";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LocationProvider } from "./src/context/LocationContext";

enableLatestRenderer();

export default function App() {
  return (
    <NavigationContainer>
      <LocationProvider>
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="#FFF"
              translucent
            />
            <Routes />
          </GestureHandlerRootView>
        </ThemeProvider>
      </LocationProvider>
    </NavigationContainer>
  );
}
