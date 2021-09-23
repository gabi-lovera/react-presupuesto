import React, { useState, useEffect } from "react";
import Presupuesto from "./Presupuesto";
import Form from "./Form";
import Listado from "./Listado";
import Control from "./Control";
import "../styles/transaction.css";
import Nav from "./Nav";

const Home = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarCampo, setCampo] = useState(true);

  const [gastos, GuardarGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  const eliminarGasto = (id, cantidad) => {
    GuardarGastos((oldList) => oldList.filter((item) => item.id !== id));
    setRestante(restante + cantidad);
  };

  useEffect(() => {
    if (crearGasto) {
      GuardarGastos([...gastos, gasto]);
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, restante, gastos]);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="contenido-principal">
          <h1 className="text-title-card">Mis gastos</h1>
          {mostrarCampo ? (
            <Presupuesto
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setCampo={setCampo}
            />
          ) : (
            <>
              <div className="row-transaction">
                <div className="one-half">
                  <Form
                    guardarCrearGasto={guardarCrearGasto}
                    setGasto={setGasto}
                  />
                </div>
                <div className="one-half div-control-list">
                  <Listado gastos={gastos} eliminarGasto={eliminarGasto} />
                  <Control
                    presupuesto={presupuesto}
                    restante={restante}
                    setCampo={setCampo}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
