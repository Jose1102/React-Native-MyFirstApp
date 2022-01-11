import React from "react";
import { Text, TextInput, Button, View } from "react-native";

 const LoginForm = () => {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button
        title="Enviar"
        onPress={() => console.log("Enviado correctamente")}
      />
    </View>
  );
}

export default LoginForm;
