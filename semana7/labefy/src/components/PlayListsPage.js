import React from 'react';
import axios from 'axios';

const axiosConfig = {
  headers: {
    Authorization: 'diogo-gaspar-mello',
  },
};

class PlayListPage extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.getPlayLists();
  }

  getPlayLists = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div>
          {this.state.playlists.map((playlist) => {
            return (
              <div>
                <li>{playlist.name}</li>
              </div>
            );
          })}
          <h1>ahuuha</h1>
        </div>
      </>
    );
  }
}

export default PlayListPage;
