import React, { Component } from "react";

export class ToDoItem extends Component {
  markDone = e => {
    console.log("mark");
  };
  render() {
    return (
      <li>
        <p>{this.props.entry.task}</p>
        <p>importance: {this.props.entry.importance}</p>
        <p>-</p>
        <button onClick={this.markDone}>mark done</button>
      </li>
    );
  }
}

export default ToDoItem;
