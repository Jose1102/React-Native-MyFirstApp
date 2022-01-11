import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import SettingsScreen from "../screen/SettingsScreen";

const Stack = createStackNavigator();
const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
