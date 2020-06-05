import React from 'react';
import PlayListPage from './PlayListsPage';
import PlayListAdd from './PlayListAdd';

class TogglePage extends React.Component {
  state = {
    currentPage: 'PlayListAdd',
  };

  togglePageOnClick = () => {
    if (this.state.playlistPage === false) {
      this.setState({ playlistPage: 'PlayListsPage' });
    } else {
      this.setState({ playlistPage: 'PlayListAdd' });
    }
  };

  render() {
    return (
      <>
        <div>
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

export default TogglePage;
