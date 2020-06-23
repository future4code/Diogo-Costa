import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const handleToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={handleToHome}>home</button>
    </div>
  );
};

export default LoginPage;
