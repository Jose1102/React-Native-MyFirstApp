import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

const SettingsScreen = (props) => {
  const { navigation } = props;
  const goToHome = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <SafeAreaView>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Text>Estamos en SettingsScreen</Text>
      <Button onPress={() => goToHome("Home")} title="Ir al HOME" />
    </SafeAreaView>
  );
};

export default SettingsScreen;