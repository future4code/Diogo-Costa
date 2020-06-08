import React from 'react';
import axios from 'axios';

class TrackAdd extends React.Component {
  state = {
    name: '',
    artist: '',
    url: '',
  };

  handleInputName = (event) => {
    const newName = event.target.value;

    this.setState({ name: newName });
  };

  handleInputArtist = (event) => {
    const newArtist = event.target.value;

    this.setState({ artist: newArtist });
  };

  handleInputURL = (event) => {
    const newURL = event.target.value;

    this.setState({ url: newURL });
  };

  handleAddTrackOnClick = () => {
    const axiosConfig = {
      headers: {
        Authorization: 'diogo-gaspar-mello',
      },
      params: {
        playlistId: this.state.id,
      },
    };

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`,
        body,
        axiosConfig
      )
      .then(() => {
        alert(`${this.state.name} funfou`);
      });
  };

  render() {
    return (
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleInputName}
        />
        <label htmlFor="artist">Artista:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={this.state.artist}
          onChange={this.handleInputArtist}
        />
        <label htmlFor="url">Link da música:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={this.state.url}
          onChange={this.handleInputURL}
        />
        <button onClick={this.handleAddTrackOnClick}>Adiciona Faixas</button>
      </div>
    );
  }
}

export default TrackAdd;
