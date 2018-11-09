import React, { Component } from "react";
import "./App.css";
import ToDoList from "./TodoList.js";
import AddTask from "./addTask.js";

export class App extends Component {
  state = {
    entries: []
  };
  addNew = newTaskContent => {
    this.setState({
      entries: this.state.entries.concat(newTaskContent)
    });
  };
  markDone = key => {
    const newState = this.state.entries.map(entry => {
      if (entry.id === key) {
        const copy = Object.assign({}, entry, {
          done: !entry.done
        });
        return copy;
      } else {
        return entry;
      }
    });
    this.setState({
      entries: newState
    });
  };
  render() {
    const sorted = this.state.entries.sort(function(a, b) {
      if (a.done && !b.done) {
        return 1;
      } else if ((a.done && b.done) || (!a.done && !b.done)) {
        return 0;
      } else {
        return -1;
      }
    });
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
