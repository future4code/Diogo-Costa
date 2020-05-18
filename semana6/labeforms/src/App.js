import React from 'react';
import styled from 'styled-components';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree';
import EndPage from './Components/EndPage';
import Header from './Components/Header';

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const ButtonBehavior = styled.button`
  cursor: pointer;
  &[disabled] {
    display: none;
    visibility: hidden;
  }
`;

class App extends React.Component {
  state = {
    page: 1,
  };

  onClickNextPage = () => {
    const actualPage = this.state.page;
    const changePage = actualPage + 1;

    this.setState({ page: changePage });
  };

  renderPage = () => {
    switch (this.state.page) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <EndPage />;
      default:
        return;
    }
  };

  render() {
    return (
      <MainContent>
        <Header />
        {this.renderPage()}
        <ButtonBehavior
          onClick={this.onClickNextPage}
          disabled={this.state.page === 4}
        >
          Próxima etapa
        </ButtonBehavior>
      </MainContent>
    );
  }
}
export default App;
