import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";
import { Input, Button } from "@chakra-ui/react";
import "../styles/presupuesto.css";

const Presupuesto = ({ setPresupuesto, setRestante, setCampo }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setCampo(false);
  };
  return (
    <>
      <h2 className="text-label">Ingresá tu presupuesto</h2>
      {error ? <Error mensaje="Ingrese un número" /> : null}
      <form className="form-sub" onSubmit={agregarPresupuesto}>
        <Input
          type="number"
          className="input"
          placeholder="Ej: $ 20000"
          errorBorderColor="fds"
          onChange={definirPresupuesto}
        />
        <br />
        <Button
          className="btn-submit"
          type="submit"
          colorScheme="teal"
          size="lg"
        >
          Continuar
        </Button>
      </form>
    </>
  );
};
Presupuesto.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setCampo: PropTypes.func.isRequired,
};
export default Presupuesto;
