import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
//import ToDoItem from "./ToDoItem";

export class ToDoList extends Component {
  render() {
    const allEntriesToEle = this.props.entries.map((entry, i) => {
      return <ToDoItem entry={entry} index={i} />;
    });
    return <ul>{allEntriesToEle}</ul>;
  }
}

export default ToDoList;
