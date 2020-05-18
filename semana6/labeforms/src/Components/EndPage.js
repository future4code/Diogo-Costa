import React from 'react';
import styled from 'styled-components';

const Global = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



class EndPage extends React.Component {
  render() {
    return (
      <Global>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </Global>
    );
  }
}

export default EndPage;
