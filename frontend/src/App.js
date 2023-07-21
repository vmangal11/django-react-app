import React, { Component } from "react";
import "./App.css";

const tasks = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setstatus({ viewCompleted: true });
    }
    return this.setstatus({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incompleted
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      (item) => item.completed == viewCompleted
    );
  };

  render() {
    return <main className="context"></main>;
  }
}
export default App;
