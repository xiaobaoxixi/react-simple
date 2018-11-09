import React, { Component } from "react";

export class ToDoItem extends Component {
  state = {
    done: this.props.entry.doneStatus
  };
  toggleDone = e => {
    this.setState({
      done: !this.state.done
    });
    this.props.markDone(this.props.index);
  };
  render() {
    return (
      <li className={this.state.done === true ? "done" : ""}>
        <p>{this.props.entry.task}</p>
        <p>importance: {this.props.entry.importance}</p>
        <button onClick={this.toggleDone}>
          {this.state.done === true
            ? "ooops, not done yet"
            : "oyeah~ this is done"}
        </button>
      </li>
    );
  }
}

export default ToDoItem;
