import React from 'react';
import './App.css';
//import axios from 'axios';
import GeneratedTasks from './components/GeneratedTasks';

class App extends React.Component {
  render() {
    return (
      <div className="Container">
        <h1>Gerador de atividades</h1>
        <GeneratedTasks />
      </div>
    );
  }
}

export default App;
