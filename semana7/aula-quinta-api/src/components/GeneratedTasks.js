import React from 'react';
import axios from 'axios';

class GeneratedTasks extends React.Component {
  state = {
    task: {},
  };

  taskGeneratorOnClick = () => {
    axios
      .get(`http://www.boredapi.com/api/activity/`)
      .then((response) => {
        this.setState({ task: response.data });
        console.log(this.state.task.activity);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.taskGeneratorOnClick}>Gerar To-Do</button>
        <h1>{this.state.task.activity}</h1>
      </div>
    );
  }
}

export default GeneratedTasks;
