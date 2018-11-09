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
    this.addToAPI(newTaskContent);
  };
  addToAPI = newContent => {
    // write to mockAPI
    fetch(`http://5be5595c48c1280013fc3d34.mockapi.io/react-toDoList`, {
      method: "post",
      body: JSON.stringify(newContent),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  };
  updateAPI = (newState, uid) => {
    console.log(newState);
    const updatedEntry = newState.filter(entry => entry.uid === uid);
    console.log(updatedEntry);
    const id = updatedEntry[0].id;
    if (updatedEntry.length > 0) {
      fetch(`http://5be5595c48c1280013fc3d34.mockapi.io/react-toDoList/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(updatedEntry[0])
      });
    }
  };

  markDone = (id, uid) => {
    const newState = this.state.entries.map(entry => {
      if (entry.id === id) {
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
    this.updateAPI(newState, uid);
  };
  componentDidMount() {
    fetch("http://5be5595c48c1280013fc3d34.mockapi.io/react-toDoList")
      .then(data => data.json())
      .then(list => {
        this.setState({
          entries: list
        });
      });
  }
  render() {
    const sorted = this.state.entries.slice().sort(function(a, b) {
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
        <ToDoList entries={sorted} markDone={this.markDone} />
      </div>
    );
  }
}

export default App;
