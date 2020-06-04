import React from 'react';
import '../styles/App.css';
import axios from 'axios';

class SignUpPage extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleNameOnChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleEmailOnChange = (event) => {
    const newEmailValue = event.target.value;

    this.setState({ email: newEmailValue });
  };
  handleCreateUser = (e) => {
    e.preventDefault();

    const axiosConfig = {
      headers: {
        Authorization: 'diogo-gaspar-mello',
      },
    };

    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso`);
        this.setState({ name: '', email: '' });
      })
      .catch((e) => {
        alert('Erro ao criar usuário.');
      });
  };

  render() {
    return (
      <div>
        <form className="FormInput">
          <div className="Fields">
            <label>Nome:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameOnChange}
            />
          </div>
          <div className="Fields">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleEmailOnChange}
            />
          </div>
          <button onClick={this.handleCreateUser}>Salvar</button>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
