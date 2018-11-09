import React, { Component } from "react";
import "./App.css";
import ToDoList from "./TodoList.js";
import AddTask from "./addTask.js";

export class App extends Component {
  state = {
    entries: []
  };
  addNew = newTaskContent => {
    console.log(newTaskContent);
    this.setState({
      entries: this.state.entries.concat(newTaskContent)
    });
  };
  markDone = index => {
    console.log("mark to parent");
  };
  render() {
    const currentMax = 0;
    return (
      <div>
        <h1>to - do -list</h1>
        <AddTask addNew={this.addNew} currentMax={currentMax} />
        <ToDoList entries={this.state.entries} markDone={this.markDone} />
      </div>
    );
  }
}

export default App;
