import React from "react";
import "./IconeSalvarPostagem.css";

export class IconeSalvarPostagem extends React.Component {
  render() {
    return (
      <div className={"icon-container"}>
        <img
          alt={"Icone"}
          src={this.props.icone}
          onClick={this.props.onClickIcone}
        />
        <p>{this.props.valorContador}</p>
      </div>
    );
  }
}
