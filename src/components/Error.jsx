import React from "react";
import PropTypes from "prop-types";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Error = ({ mensaje }) => (
  <Alert className="alert-presupuest" status="error">
    <AlertIcon />
    <AlertTitle className="font-mont" mr={2}>
      Ups! El presupuesto no es correcto
    </AlertTitle>
    <AlertDescription className="font-sans">{mensaje}.</AlertDescription>
  </Alert>
);

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
