import React, { Component } from "react";

// use a existing Unique key pakage
import uuidv4 from "uuid/v4";

export class AddTask extends Component {
  state = {
    id: "",
    task: "",
    importance: 1,
    done: false
  };
  setImportance = e => {
    this.setState({
      importance: Number(e.target.value)
    });
  };
  setTask = e => {
    this.setState({
      task: e.target.value
    });
    this.setState({
      index: this.props.index
    });
  };
  addToList = e => {
    e.preventDefault();
    if (this.state.task !== "") {
      this.props.addNew({
        uid: uuidv4(),
        task: this.state.task,
        importance: this.state.importance,
        done: false
      });
      this.clearForm();
    }
  };
  clearForm() {
    this.setState({
      uid: "",
      task: "",
      importance: 1,
      done: false
    });
  }
  render() {
    return (
      <form>
        <textarea onChange={this.setTask} value={this.state.task} />
        <select onChange={this.setImportance} value={this.state.importance}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={this.addToList}>add task</button>
      </form>
    );
  }
}

export default AddTask;
