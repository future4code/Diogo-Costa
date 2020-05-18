import React from 'react';
//import styled from 'styled-components';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
//import StepThree from './Components/StepThree';

class App extends React.Component {
  state = {
    formCompleted: true,
  };

  onClickPageTwo = () => {
    this.setState({ formCompleted: !this.state.formCompleted });
  };

  /* onClickPageThree = () => {
    this.setState({ formCompleted: !this.state.formCompleted });
  };
 */
  render() {
    if (this.state.formCompleted) {
      return (
        <div>
          <StepOne pageTwo={this.onClickPageTwo} />
        </div>
      );
    } else {
      return <StepTwo /* pageThree={this.onClickPageThree} */ />;
    }
  }
}

export default App;
