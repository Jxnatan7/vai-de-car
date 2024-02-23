import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Entry from "../screens/Entry";
import Login from "../screens/Login";
import UserSignUp from "../screens/User/SignUp";
import DriverSignUp from "../screens/Driver/SignUp";
import AutomobileRegister from "../screens/Driver/Automobile/Register";
import NewTrip from "../screens/User/Trip/New";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="entry">
      <Stack.Screen
        options={{headerShown: false}}
        name="entry"
        component={Entry}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="user-signup"
        component={UserSignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="driver-signup"
        component={DriverSignUp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="automobile-register"
        component={AutomobileRegister}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="new-trip"
        component={NewTrip}
      />
    </Stack.Navigator>
  );
}
