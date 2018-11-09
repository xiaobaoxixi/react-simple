import React, { Component } from "react";

export class AddTask extends Component {
  state = {
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
  };
  addToList = e => {
    e.preventDefault();
    if (this.state.task !== "") {
      this.props.addNew(this.state);
      this.clearForm();
    }
  };
  clearForm() {
    this.setState({
      task: "",
      importance: 1,
      done: false
    });
  }
  render() {
    return (
      <form>
        <textarea onInput={this.setTask} value={this.state.task} />
        <select onChange={this.setImportance} value={this.state.importance}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={this.addToList}>add</button>
      </form>
    );
  }
}

export default AddTask;
