import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const Saludar = (props) => {
  const { nombre, apellido } = props;
  console.log(nombre);
  return (
    <Text>
      Hola {nombre} {apellido}
    </Text>
  );
};

Saludar.defaultProps = {
  nombre: "Jose",
  apellido: "Castro",
};

Saludar.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string,
};

export default Saludar;
