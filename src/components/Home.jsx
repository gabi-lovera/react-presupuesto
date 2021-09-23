import React from "react";
import LottieAnimation from "../animations/Lottie";
import finance from "../animations/finance.json";
import { Button, Text } from "@chakra-ui/react";
import "../styles/home.css";

const Home = ({ history }) => {
  function handleOnClick() {
    history.push("/transaction");
  }
  return (
    <>
      <Text className="text-header" fontSize="50px" color="tomato">
        Pres<span>upuesto</span>
      </Text>
      <div className="content-center">
        <div className="container-text">
          <h1 className="text-title">Controlá</h1>
          <h1 className="text-title">tu dinero!</h1>
          <p className="text-sub">Ingresá tu presupuesto para</p>
          <p className="text-sub">controlar tus gastos</p>
          <Button className="button-home" onClick={handleOnClick} size="lg">
            Continuar
          </Button>
        </div>
        <div className="container-img">
          <LottieAnimation lotti={finance} />
        </div>
      </div>
    </>
  );
};

export default Home;
