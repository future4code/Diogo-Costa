import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <div>
        <img src={props.imagem1} alt="" />
        <p>{props.contato1}</p>
      </div>
      <div>
        <img src={props.imagem2} alt="" />
        <p>{props.contato2}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
