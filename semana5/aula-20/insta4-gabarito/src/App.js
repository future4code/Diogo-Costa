import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const FormSize = styled.form`
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: 300px;
`;

const InputSize = styled.input`
  padding: 10px;
  margin: 10px;
`;

const ButtonSize = styled.button`
  padding: 10px;
  margin: 10px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'joao',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151',
      },
      {
        nomeUsuario: 'amanda',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152',
      },
    ],
    valorInputNome: '',
    valorInputFotoU: '',
    valorInputFotoP: '',
  };

  onClickAddNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoU,
      fotoPost: this.state.valorInputFotoP,
    };

    const newPostDone = [newPost, ...this.state.posts];

    this.setState({ posts: newPostDone });
    console.table(newPostDone);

    this.setState({ valorInputNome: '' });
    this.setState({ valorInputFotoU: '' });
    this.setState({ valorInputFotoP: '' });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoU = (event) => {
    this.setState({ valorInputFotoU: event.target.value });
  };

  onChangeInputFotoP = (event) => {
    this.setState({ valorInputFotoP: event.target.value });
  };

  render() {
    const componentesPost = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <div className={'app-container'}>
        <FormSize>
          <InputSize
            type="text"
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
          />
          <InputSize
            type="text"
            value={this.state.valorInputFotoU}
            onChange={this.onChangeInputFotoU}
          />
          <InputSize
            type="text"
            value={this.state.valorInputFotoP}
            onChange={this.onChangeInputFotoP}
          />
          <ButtonSize onClick={this.onClickAddNewPost}>Postar</ButtonSize>
        </FormSize>
        <div>{componentesPost}</div>
      </div>
    );
  }
}

export default App;
