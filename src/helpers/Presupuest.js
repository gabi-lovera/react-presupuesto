export const revisarPresupuesto = (presupuesto, restante) => {
  let clase;
  if (restante <= 0) {
    clase = "error";
  } else if (presupuesto / 2 > restante) {
    clase = "warning";
  } else {
    clase = "success";
  }
  return clase;
};

export const mansajeAdvertencia = (presupuesto, restante) => {
  let mensaje;
  if (restante <= 0) {
    mensaje = <p className="font-sans">El presupuesto se ha agotado</p>;
  } else if (presupuesto / 2 > restante) {
    mensaje = (
      <p className="font-sans">
        Ciudado esta llegando al límite de su presupuesto
      </p>
    );
  } else {
    mensaje = null;
  }
  return mensaje;
};
