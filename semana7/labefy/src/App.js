import React from 'react';
import './App.css';
import PlayListAdd from './components/PlayListAdd';
import TogglePage from './components/TogglePage';
import PlayListPage from './components/PlayListsPage';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <h1>opa</h1>
          <button onClick={this.togglePageOnClick}>PlayLists</button>
          {this.state.currentPage === 'PlayListAdd' ? (
            <PlayListAdd />
          ) : (
            <PlayListPage />
          )}
        </div>
      </>
    );
  }
}

export default App;
