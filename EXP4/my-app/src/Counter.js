import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container">
        <h1>COUNTER: {this.state.count}</h1>
        <div className="content">
          <button className="Inc" onClick={this.increment}>
            Increment
          </button>
          <button className="Res" onClick={this.reset}>
            Reset
          </button>
          <button className="Dec" onClick={this.decrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
