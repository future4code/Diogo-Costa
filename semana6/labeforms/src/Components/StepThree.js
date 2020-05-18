import React from 'react';
import styled from 'styled-components';

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

const SelectMenu = styled.select`
  margin: 10px;
`;

class StepThree extends React.Component {
  render() {
    return (
      <div>
        <Global>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <label>5. Porque você não terminou o curso?</label>
          <Inputs type="text" />
          <label>6. Você fez algum curso complementar?</label>
          <SelectMenu name="" id="">
            <option value="">Nenhum</option>
            <option value="">Curso técnico</option>
            <option value="">Curso de inglês</option>
          </SelectMenu>
          <button>Próxima etapa</button>
        </Global>
      </div>
    );
  }
}

export default StepThree;
