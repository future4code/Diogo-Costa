import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const handleToLogin = () => {
    history.push("/login");
  };

  const handleToForm = () => {
    history.push("/form");
  };

  const handleToCreate = () => {
    history.push("/create");
  };

  const handleToList = () => {
    history.push("/list");
  };

  const handleToDetails = () => {
    history.push("/details");
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleToForm}>Ir para Form</button>
      <button onClick={handleToCreate}>Ir para Criar</button>
      <button onClick={handleToList}>Ir para Lista</button>
      <button onClick={handleToLogin}>Ir para login</button>
      <button onClick={handleToDetails}>Ir para Detalhes</button>
    </div>
  );
};

export default HomePage;
