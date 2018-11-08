import React, { Component } from "react";
import "./App.css";
import ToDoList from "./TodoList.js";
import AddTask from "./addTask.js";

export class App extends Component {
  state = {
    entries: [
      { task: "task1", importance: 1, doneStatus: false },
      { task: "task2", importance: 1, doneStatus: false },
      { task: "task3", importance: 1, doneStatus: false }
    ]
  };
  addNew = newTask => {
    this.setState({
      entries: this.state.entries.concat(newTask)
    });
  };
  render() {
    return (
      <div>
        <h1>to - do -list</h1>
        <AddTask addNew={this.addNew} />
        <ToDoList entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
