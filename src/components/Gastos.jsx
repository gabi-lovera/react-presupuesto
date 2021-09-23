import React from "react";
import PropTypes from "prop-types";
import { CloseIcon } from "@chakra-ui/icons";
import { numberWithCommas } from "../helpers/Calculator";
import "../styles/outlay.css";

const Gastos = ({ gasto, deleteGasto }) => (
  <li className="div-subtitle-list">
    <p className="text-content subtitle-gasto">{gasto.nombre}</p>
    <p className="text-content subtitle-value">
      {" "}
      $ {numberWithCommas(gasto.cantidad)}
    </p>
    <CloseIcon
      className="delete-icon"
      onClick={(e) => deleteGasto(gasto.id, gasto.cantidad)}
    />
  </li>
);

Gastos.propTypes = {
  gasto: PropTypes.object.isRequired,
  deleteGasto: PropTypes.func.isRequired,
};

export default Gastos;
