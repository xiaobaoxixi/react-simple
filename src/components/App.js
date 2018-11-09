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
  addNew = newTaskContent => {
    this.setState({
      entries: this.state.entries.concat(newTaskContent)
    });
  };
  markDone = markDone => {
    console.log("mark to parent");
  };
  render() {
    return (
      <div>
        <h1>to - do -list</h1>
        <AddTask addNew={this.addNew} />
        <ToDoList entries={this.state.entries} markDone={this.markDone} />
      </div>
    );
  }
}

export default App;
