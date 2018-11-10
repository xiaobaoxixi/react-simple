import React, { Component } from "react";
import "./ToDoItem.css";
export class ToDoItem extends Component {
  state = {
    done: this.props.entry.doneStatus
  };
  toggleDone = e => {
    this.setState({
      done: !this.state.done
    });
    this.props.markDone(this.props.entry.id, this.props.entry.uid);
  };
  render() {
    return (
      <li
        className={this.props.state === true ? "done" : ""}
        onClick={this.toggleDone}
      >
        <div
          className={
            this.props.entry.importance < 3
              ? "imp"
              : this.props.entry.importance < 6
              ? "imp normal"
              : "imp important"
          }
        />
        <p className="task">{this.props.entry.task}</p>
        {/* <button className="markDoneButton" onClick={this.toggleDone}>
          {this.state.done === true
            ? "ooops, not done yet"
            : "oyeah~ this is done"}
        </button> */}
      </li>
    );
  }
}

export default ToDoItem;
