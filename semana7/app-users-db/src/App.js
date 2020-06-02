import React from 'react';
import ShowUsers from './components/ShowUsers';
import axios from 'axios';
import './App.css';
import InputForm from './components/InputForm';
import PageChangeButton from './components/PageChangeButton';

class App extends React.Component {
  state = {
    formOrList: true,
  };

  ChangePageButton = () => {
    return { ShowUsers };
  };

  render() {
    return (
      <div className="Container">
        <PageChangeButton />
        <InputForm />;
      </div>
    );
  }
}

export default App;
