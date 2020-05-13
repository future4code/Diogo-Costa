import React, { Component } from "react";
import "./SecaoComentario.css";

export class SecaoComentario extends Component {
  state = {
    comentario: "",
  };

  onChangeComentario = (event) => {
    const comentarioFeito = event.target.value;
    this.setState({ comentario: comentarioFeito });
    console.log(this.state.comentario);
  };

  /* Não consegui fazer imprimir só uma linha no console.
  
  imprimeNoConsole = (event) => {
    const comentarioFeito = event.target.value;
    console.log(comentarioFeito);
  }; */

  render() {
    return (
      <div className={"comment-container"}>
        <input
          className={"input-comentario"}
          placeholder={"Comentário"}
          value={this.setState.comentario}
          onChange={this.onChangeComentario}
          //onClick={this.imprimeNoConsole}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
      </div>
    );
  }
}
