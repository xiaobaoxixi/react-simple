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
    this.props.addNew(this.state);
    console.log(this.state);
  };
  render() {
    return (
      <form>
        <textarea onInput={this.setTask} />
        <select onChange={this.setImportance}>
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
