import React, { useState } from "react";
import axios from "axios";

import { FooterStyle } from "../styles/GlobalStyle";

const Footer = (props) => {
  const axiosConfig = {
    data: {
      id: props.match,
      choice: true,
    },
  };

  const [liked, setLiked] = useState(false);

  const handleOnClicklikeAnUser = () => {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gaspar/choose-person`,
        axiosConfig
      )
      .then((res) => {
        setLiked(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(axiosConfig.data.id);
  console.log(liked);
  return (
    <FooterStyle>
      <button>X</button>
      <button onClick={handleOnClicklikeAnUser}>S2</button>
    </FooterStyle>
  );
};

export default Footer;
