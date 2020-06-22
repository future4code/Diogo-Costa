import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPicture } from "../styles/GlobalStyle";
import Footer from "./Footer";

const MainPicture = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gaspar/person`
      )
      .then((res) => {
        setUsersList(res.data.profile);
        //console.log(res.data.profile.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //console.log(usersList.id);
  return (
    <ContainerPicture>
      <span>{usersList.name}</span>
      <img src={usersList.photo} alt="" />
      <Footer match={usersList.id} />
    </ContainerPicture>
  );
};

export default MainPicture;
