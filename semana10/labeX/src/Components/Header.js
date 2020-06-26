import React from "react";
import LogoWhite from "../assets/LabeX_logo_white.png";
import { HeaderStyle } from "../styles/GlobalStyles";
import { useLogoutButton } from "../Hooks/useLogoutButton";

const Header = () => {
  const logoutBtn = useLogoutButton();
  return (
    <HeaderStyle>
      <img src={LogoWhite} alt="" />
      <button onClick={logoutBtn}>logout</button>
    </HeaderStyle>
  );
};

export default Header;
