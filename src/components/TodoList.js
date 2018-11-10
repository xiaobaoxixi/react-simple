import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import "./TodoList.css";

export class ToDoList extends Component {
  render() {
    const allEntriesToEle = this.props.entries
      .sort(function(a, b) {
        return b.importance - a.importance;
      })
      .map(entry => {
        return (
          <ToDoItem
            entry={entry}
            markDone={this.props.markDone}
            key={entry.uid}
            state={entry.done}
          />
        );
      });
    return <ul>{allEntriesToEle}</ul>;
  }
}

export default ToDoList;
