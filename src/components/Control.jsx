import React from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto, mansajeAdvertencia } from "../helpers/Presupuest";
import { numberWithCommas } from "../helpers/Calculator";
import { Alert } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const Control = ({ presupuesto, restante, setCampo }) => {
  function goToEdit() {
    setCampo(true);
  }

  return (
    <div className="div-control">
      <Alert className="alert" status="info">
        <p className="text-alert">
          Presupuesto ${numberWithCommas(presupuesto)}
        </p>
        <p className="text-icon">
          <EditIcon className="icon edit-icon" onClick={goToEdit} />
        </p>
      </Alert>

      <Alert
        className="alert"
        status={revisarPresupuesto(presupuesto, restante)}
      >
        <p className="text-alert">Restante ${numberWithCommas(restante)}</p>
      </Alert>
      {mansajeAdvertencia(presupuesto, restante)}
    </div>
  );
};

Control.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
  setCampo: PropTypes.func.isRequired,
};

export default Control;
