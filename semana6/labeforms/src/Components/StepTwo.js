import React from 'react';
import styled from 'styled-components';
//import StepThree from './StepThree';

const Global = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px black solid;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`;

const Inputs = styled.input`
  margin: 10px 0;
`;

class StepTwo extends React.Component {
  state = {
    toPageThree: '',
  };

  /*   pageThree = () => {
        this.setState({toPageThree: })
    }
 */

  render() {
    return (
      <div>
        <Global>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <label>5. Qual curso?</label>
          <Inputs type="text" />
          <label>6. Qual a unidade de ensino?</label>
          <Inputs type="text" />
          <button onClick={this.pageThree}>Próxima etapa</button>
        </Global>
      </div>
    );
  }
}

export default StepTwo;
