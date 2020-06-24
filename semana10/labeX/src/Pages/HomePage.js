import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SuperBigPage = styled.div`
  height: 100vh;
`;

const HomePage = () => {
  const history = useHistory();

  const handleToLogin = () => {
    history.push("/login");
  };

  const handleToForm = () => {
    history.push("/form");
  };

  return (
    <SuperBigPage>
      <h1 id="sobe">HomePage</h1>
      {/* <a href="#embaixo">vai pro botton</a> */}
      <main>
        <button onClick={handleToLogin}>Login</button>
        <button onClick={handleToForm}>Application</button>
      </main>
      {/*       <footer id="embaixo">
        footer
        <a href="#sobe">sobe</a>
      </footer> */}
    </SuperBigPage>
  );
};

export default HomePage;
