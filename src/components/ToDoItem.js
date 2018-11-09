import React, { Component } from "react";

export class ToDoItem extends Component {
  state = {
    done: this.props.entry.doneStatus
  };
  toggleDone = e => {
    this.setState({
      done: !this.state.done
    });
    console.log(this.props.index);
  };
  render() {
    return (
      <li className={this.state.done === true ? "done" : ""}>
        <p>{this.props.entry.task}</p>
        <p>importance: {this.props.entry.importance}</p>
        <button onClick={this.toggleDone}>
          {this.state.done === true ? "not done yet" : "mark done"}
        </button>
      </li>
    );
  }
}

export default ToDoItem;
