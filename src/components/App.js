import React, { Component } from "react";
import "./App.css";
import ToDoList from "./TodoList.js";
import AddTask from "./AddTask.js";

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
    const uid = newContent.uid;
    // write to mockAPI
    fetch(`http://5be5595c48c1280013fc3d34.mockapi.io/react-toDoList`, {
      method: "post",
      body: JSON.stringify(newContent),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(data => {
        const assignedId = data.id;
        const newEntry = this.state.entries.filter(
          entry => entry.uid === uid
        )[0];
        newEntry.id = assignedId;
      });
  };
  updateAPI = (newState, uid) => {
    const updatedEntry = newState.filter(entry => entry.uid === uid);
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
          entries: list.filter(each => each.done === false)
        });
      });
  }
  clearAllDone = e => {
    console.log("clear all done");
    const newState = this.state.entries.filter(entry => entry.done === false);
    this.setState({
      entries: newState
    });
  };
  deleteAllDone = () => {
    // clear all local done
    const allDone = this.state.entries.filter(each => each.done === true);
    allDone.forEach(deleteFromAPI);
    function deleteFromAPI(entry) {
      const id = entry.id;
      fetch("http://5be5595c48c1280013fc3d34.mockapi.io/react-toDoList/" + id, {
        method: "delete"
      })
        .then(res => res.json())
        .then(data => {
          console.log("this entry is now deleted", data);
          // clear all done in API (some of them are not displayed on screen, cuz only fetch the un-done, and hide-done will remove them from state, so can't get id to perform delete on API anymore)
          fetch("http://5be5595c48c1280013fc3d34.mockapi.io/react-toDoList/")
            .then(data => data.json())
            .then(data => {
              const allEntries = data;
              console.log(allEntries);
              allEntries.forEach(checkDone);
              function checkDone(entry) {
                const id = entry.id;
                if (entry.done === true) {
                  fetch(
                    "http://5be5595c48c1280013fc3d34.mockapi.io/react-toDoList/" +
                      id,
                    {
                      method: "delete"
                    }
                  )
                    .then(data => data.json())
                    .then(data => {
                      console.log("delete one from API");
                    });
                }
              }
            });
        });
    }
    // delete should also update state so that the list shows only what's undone
    const newState = this.state.entries.filter(entry => entry.done === false);
    this.setState({
      entries: newState
    });
  };
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
        <h1>Free Up Your Mind</h1>
        <AddTask addNew={this.addNew} />
        <ToDoList entries={sorted} markDone={this.markDone} />
        <button className="half-width" onClick={this.clearAllDone}>
          hide <br />
          the finished
        </button>
        <button className="half-width" onClick={this.deleteAllDone}>
          delete
          <br />
          for good
        </button>
      </div>
    );
  }
}

export default App;
