import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import MatchList from "./components/MatchList";
//import MainPicture from "./components/MainPicture";

//import styled from "styled-components";
import {
  ContainerStyle,
  MainCardStyle,
} from "./styles/GlobalStyle.js";

function App() {
  return (
    <ContainerStyle>
      <MainCardStyle>
        <Header />
        <Footer />
      </MainCardStyle>
    </ContainerStyle>
  );
}

export default App;
