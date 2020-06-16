import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MatchList from "./components/MatchList";
import MainPicture from "./components/MainPicture";

import { ContainerStyle, MainCardStyle } from "./styles/GlobalStyle.js";
//import styled from "styled-components";

function App() {
  return (
    <ContainerStyle>
      <MainCardStyle>
        <Header />
        {/* <MainPicture /> */}
        <MatchList />
        <Footer />
      </MainCardStyle>
    </ContainerStyle>
  );
}

export default App;
