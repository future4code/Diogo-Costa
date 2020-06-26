import React from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles>
        <Router />
      </GlobalStyles>
    </>
  );
}

export default App;
