import React, { Component } from 'react';
import './PageChangeButton.css';

class PageChangeButton extends Component {
  render() {
    return (
      <div className="ButtonDiv">
        <button
          className="ChangePageButtonStyle"
          onClick={this.ChangePageButton}
        >
          Ir para página de lista
        </button>
      </div>
    );
  }
}

export default PageChangeButton;
