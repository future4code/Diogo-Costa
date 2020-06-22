import React, { useState } from "react";
import { HeaderStyle } from "../styles/GlobalStyle";
import MatchList from "./MatchList";
import MainPicture from "./MainPicture";

const Header = () => {
  const [actualPage, setActualPage] = useState();

  const onClickTooglePage = () => {
    if (actualPage) {
      setActualPage(false);
    } else {
      setActualPage(true);
    }
  };

  return (
    <>
      <HeaderStyle>
        <h1>AstroMatch</h1>
        <button onClick={onClickTooglePage}>toogle</button>
      </HeaderStyle>
      {actualPage === true ? <MatchList /> : <MainPicture />}
    </>
  );
};

export default Header;
