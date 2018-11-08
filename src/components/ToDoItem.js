import React, { Component } from "react";

export class ToDoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.entry.task}</p>
        <p>importance: {this.props.entry.importance}</p>
        <p>-</p>
      </div>
    );
  }
}

export default ToDoItem;
