import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListStyle } from "../styles/GlobalStyle";

const MatchList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    MatchedUsers();
  }, []);

  const MatchedUsers = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gaspar/matches`
      )
      .then((res) => {
        setList(res.data.matches);
        //console.log(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //console.log(list.length);
  return (
    <ListStyle>
      <h1>Deu Match</h1>
      <p>{list.length}</p>
      <p>{list.name}</p>
      {list.map((user) => (
        <li>
          {user.name} {user.age}
        </li>
      ))}
    </ListStyle>
  );
};

export default MatchList;
