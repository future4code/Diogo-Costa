import React from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <GlobalStyles>
        <Header />
        <Router />
      </GlobalStyles>
    </>
  );
}

export default App;
