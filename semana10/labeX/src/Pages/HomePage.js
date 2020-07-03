import React from "react";
import { useHistory } from "react-router-dom";
import { MainStyle, ContainerHomeStyle } from "../styles/GlobalStyles";

const HomePage = () => {
  const history = useHistory();

  const handleToLogin = () => {
    history.push("/login");
  };

  const handleToForm = () => {
    history.push("/form");
  };

  return (
    <ContainerHomeStyle>
      {/* <a href="#embaixo">vai pro botton</a> */}
      <MainStyle>
        <h1>HOMEPAGE</h1>
        <button onClick={handleToLogin}>LOGIN</button>
        <button onClick={handleToForm}>APPLY</button>
      </MainStyle>
      {/*       <footer id="embaixo">
        footer
      </footer> */}
    </ContainerHomeStyle>
  );
};

export default HomePage;
