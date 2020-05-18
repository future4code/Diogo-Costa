import React from 'react';
import styled from 'styled-components';

const Global = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inputs = styled.input`
  margin: 10px 0;
`;

class StepTwo extends React.Component {
  render() {
    return (
      <div>
        <Global>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <label>5. Qual curso?</label>
          <Inputs />
          <label>6. Qual a unidade de ensino?</label>
          <Inputs />
        </Global>
      </div>
    );
  }
}

export default StepTwo;
