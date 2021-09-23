import React from "react";
import Gastos from "./Gastos";
import PropTypes from "prop-types";

const Listado = ({ gastos, eliminarGasto, gasto }) => (
  <div className="div-listado">
    {gastos.length > 0 ? (
      <div className="div-subtitle-list">
        <p className="text-subtitle subtitle-gasto">Gasto:</p>
        <p className="text-subtitle subtitle-value">Valor:</p>
      </div>
    ) : null}
    {gastos.map((gasto) => (
      <Gastos key={gasto.id} gasto={gasto} deleteGasto={eliminarGasto} />
    ))}
  </div>
);

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
};

export default Listado;
