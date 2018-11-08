import React, { Component } from "react";
import ToDoList from "./TodoList.js";
import AddTask from "./addTask.js";

export class App extends Component {
  state = {
    entries: [
      { task: "task1", importance: 0, doneStatus: false },
      { task: "task2", importance: 0, doneStatus: false },
      { task: "task3", importance: 0, doneStatus: false }
    ]
  };
  addNew = e => {
    e.preventDefault();

    this.setState({
      entries: this.state.entries.concat({
        task: "task4",
        importance: 1,
        done: true
      })
    });
    console.log(this.state.entries);
  };
  render() {
    return (
      <div>
        <h1>to - do -list</h1>
        <ToDoList entries={this.state.entries} />
        <AddTask addNew={this.addNew} />
      </div>
    );
  }
}

export default App;
