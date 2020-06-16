import React, { useState } from "react";
import { ListStyle } from "../styles/GlobalStyle";

const MatchList = () => {
  const [list, setList] = useState([
    { name: "maria", age: 18 },
    { name: "joana", age: 16 },
  ]);

  return (
    <ListStyle>
      <h1>Deu Match</h1>
      {list.map((user) => (
        <li>
          {user.name} {user.age}
        </li>
      ))}
    </ListStyle>
  );
};

export default MatchList;
