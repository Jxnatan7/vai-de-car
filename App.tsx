import React from "react";
import { StatusBar } from "react-native";

import Signin from "./src/Screens/SignIn";

import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme";

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Signin />
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </ThemeProvider>
  );
}

export default App;
