import React, { Component } from "react";

export class AddTask extends Component {
  changeImportance = e => {
    console.log(e.target.value);
  };
  add = e => {
    e.preventDefault();
    console.log("add one");
  };
  render() {
    return (
      <form>
        <textarea />
        <select onChange={this.changeImportance}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={this.props.addNew}>add</button>
      </form>
    );
  }
}

export default AddTask;
