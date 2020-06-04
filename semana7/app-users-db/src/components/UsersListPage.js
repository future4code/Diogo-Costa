import React from 'react';
import axios from 'axios';
import '../styles/App.css';

const axiosConfig = {
  headers: {
    Authorization: 'diogo-gaspar-mello',
  },
};

class UsersListPage extends React.Component {
  state = {
    userList: [],
  };

  componentDidMount() {
    this.fetchUserList();
  }

  fetchUserList = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        axiosConfig
      )
      .then((response) => {
        this.setState({ userList: response.data });
      });
  };

  handleUserDeletion = (userId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosConfig
      )
      .then(() => {
        alert('Usuário apagado com sucesso!');
        this.fetchUserList();
      })
      .catch(() => {
        alert('ERRO AO APAGAR USUÁRIO');
      });
  };

  render() {
    return (
      <main className="ListStyle">
        {this.state.userList.length === 0 && <div>Carregando...</div>}
        {this.state.userList.map((user) => {
          return (
            <section>
              <span>{user.name}</span>
              <span onClick={() => this.handleUserDeletion(user.id)}>X</span>
            </section>
          );
        })}
      </main>
    );
  }
}

export default UsersListPage;
