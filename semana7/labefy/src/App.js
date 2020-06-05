import React from 'react';
import './App.css';
import PlayListAdd from './components/PlayListAdd';
import PlayListPage from './components/PlayListsPage';

class App extends React.Component {
  state = {
    currentPage: 'PlayListAdd',
  };

  togglePageOnClick = () => {
    if (this.state.currentPage === 'PlayListAdd') {
      this.setState({ currentPage: 'PlayListsPage' });
    } else {
      this.setState({ currentPage: 'PlayListAdd' });
    }
  };

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

// http://awful-bottle.surge.sh/