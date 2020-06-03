import React from 'react';
import './styles/App.css';
import SignUpPage from './components/SignUpPage';
import UsersListPage from './components/UsersListPage';

class App extends React.Component {
  state = {
    actualPage: 'signUp',
  };

  onClickChange = () => {
    if (this.state.actualPage === 'signUp') {
      this.setState({ actualPage: 'userList' });
    } else {
      this.setState({ actualPage: 'signUp' });
    }
  };

  render() {
    return (
      <div className="Container">
        <button className="ChangePageButtonStyle" onClick={this.onClickChange}>
          Ir para página de lista
        </button>
        {this.state.actualPage === 'signUp' ? (
          <SignUpPage />
        ) : (
          <UsersListPage />
        )}
      </div>
    );
  }
}

export default App;
