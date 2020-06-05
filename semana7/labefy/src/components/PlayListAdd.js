import React from 'react';
import axios from 'axios';

class PlayListAdd extends React.Component {
  state = {
    playlist: '',
  };

  handleInputPlayList = (event) => {
    const newPlaylist = event.target.value;

    this.setState({ playlist: newPlaylist });
  };

  handleCreatePlayList = () => {
    const axiosConfig = {
      headers: {
        Authorization: 'diogo-gaspar-mello',
      },
    };

    const body = {
      name: this.state.playlist,
    };

    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Playlist ${this.state.playlist} criada com sucesso`);
        console.log(this.state.playlist);
        this.setState({ playlist: '' });
      })
      .catch((err) => {
        alert(`Deu ruim, tente novamente`);
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.playlist}
            onChange={this.handleInputPlayList}
          />
          <button onClick={this.handleCreatePlayList}>Add New PlayList</button>
        </div>
      </>
    );
  }
}

export default PlayListAdd;
