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
const SelectMenu = styled.select`
  margin: 10px;
`;

class StepOne extends React.Component {
  state = {
    page: 1,
  };

  render() {
    return (
      <div>
        <Global>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <label>1. Qual o seu nome?</label>
          <Inputs type="text" />
          <label>2. Qual sua idade?</label>
          <Inputs type="text" />
          <label>3. Qual seu email?</label>
          <Inputs type="text" />
          <label>4. Qual sua escolaridade?</label>
          <SelectMenu name="" id="">
            <option value="">Ensino médio incompleto</option>
            <option value="">Ensino médio completo</option>
            <option value="">Ensino superior incompleto</option>
            <option value="">Ensino superior completo</option>
          </SelectMenu>
        </Global>
      </div>
    );
  }
}

export default StepOne;
