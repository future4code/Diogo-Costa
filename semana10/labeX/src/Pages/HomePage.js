import React from "react";
import { useHistory } from "react-router-dom";
//import Header from "../Components/Header";

//import styled from "styled-components";

const HomePage = () => {
  const history = useHistory();

  const handleToLogin = () => {
    history.push("/login");
  };

  const handleToForm = () => {
    history.push("/form");
  };

  return (
    <div>
      <h1>HomePage</h1>
      {/* <a href="#embaixo">vai pro botton</a> */}
      <main>
        <button onClick={handleToLogin}>Login</button>
        <button onClick={handleToForm}>Application</button>
      </main>
      {/*       <footer id="embaixo">
        footer
      </footer> */}
    </div>
  );
};

export default HomePage;
