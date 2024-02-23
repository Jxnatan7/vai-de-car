import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./src/routes";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" translucent />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
