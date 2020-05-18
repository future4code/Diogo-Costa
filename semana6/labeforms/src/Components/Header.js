import React from 'react';
import styled from 'styled-components';

const Global = styled.div`
  width: 100vw;
  text-align: center;
`;

class Header extends React.Component {
  render() {
    return (
      <Global>
        <h1>FICHA CADASTRAL</h1>
        <hr />
      </Global>
    );
  }
}
export default Header;
