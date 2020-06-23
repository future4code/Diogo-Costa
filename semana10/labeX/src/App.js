import React from "react";
import Router from "./Router";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header style={{ background: "#151515", height: "50px", color: "#fff" }}>
        App
      </header>
      <GlobalStyles>
        <Router />
      </GlobalStyles>
    </div>
  );
}

export default App;
