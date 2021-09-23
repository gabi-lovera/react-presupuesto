import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import { Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import "../styles/form.css";

const Form = ({ setGasto, guardarCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === " ") {
      setError(true);
      return;
    }
    setError(false);
    const gasto = {
      id: nanoid(),
      nombre,
      cantidad,
    };

    setGasto(gasto);
    guardarCrearGasto(true);
    setNombre("");
    setCantidad("");
  };

  return (
    <>
      <form onSubmit={agregarGasto}>
        <h2 className="text-label">Agrega tus gastos aquí</h2>
        {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
        <FormControl isRequired>
          <FormLabel className="text-label">Nombre</FormLabel>
          <Input
            type="text"
            className="input-form"
            placeholder="Ej: DESPENSAS"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel className="text-label">Valor</FormLabel>
          <Input
            type="number"
            className="input-form"
            placeholder="Ej: $3000"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          />
        </FormControl>
        <div className="content-add">
          <Button type="submit" className="btn-add">
            Agregar
          </Button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  guardarCrearGasto: PropTypes.func.isRequired,
  setGasto: PropTypes.func.isRequired,
};

export default Form;
