import React from 'react';
import axios from 'axios';
import TrackAdd from './TrackAdd';

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

  handleDeletePlaylist = (playlistID) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistID}`,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário apagado com sucesso!`);
        this.getPlayLists();
      })
      .catch((err) => {
        console.log(`O ERRO FOI: ${err}`);
      });
  };

  handleAddTracks = () => {

  }


  render() {
    return (
      <>
        <div>
          {this.state.playlists.map((playlist) => {
            return (
              <ul>
                <li onClick={this.handleAddTracks}>{playlist.name}</li>
                <button onClick={() => this.handleDeletePlaylist(playlist.id)}>
                  X
                </button>
              </ul>
            );
          })}
          <TrackAdd/>
        </div>
      </>
    );
  }
}

export default PlayListPage;
