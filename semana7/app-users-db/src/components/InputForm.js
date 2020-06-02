import React, { Component } from 'react';

class InputForm extends Component {
  state = {
    users: [],
    userName: '',
    userEmail: '',
  };

  onChangeInputName = (event) => {
    this.setState({ userName: event.target.value });
    console.log(this.state.userName);
  };

  onChangeInputEmail = (event) => {
    this.setState({ userEmail: event.target.value });
  };
  render() {
    return (
      <>
        <div className="Container">
          <div className="FormInput">
            <div className="Fields">
              <label>Nome:</label>
              <input
                value={this.state.userName}
                onChange={this.onChangeInputName}
              />
            </div>
            <div className="Fields">
              <label>Email:</label>
              <input
                value={this.state.userEmail}
                onChange={this.onChangeInputEmail}
              />
            </div>
            <button>Salvar</button>
          </div>
        </div>
      </>
    );
  }
}

export default InputForm;
