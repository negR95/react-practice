import React from "react";
import "./Counter.css";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0
    };
  }

  handleInc = () => {
    let newIndex = this.state.index + 1;
    this.setState({index: newIndex})
  }

  handleDec = () => {
    let newIndex = this.state.index - 1;
    this.setState({index: newIndex})
  }

  handleClick(val) {
    this.setState(state => {
      return {
        index: state.index + val
      };
    })
  }

  render() {
    return (
      <div className="counter">
        <label className="input-label">{this.state.index}</label>
        <button className="btn" onClick={() => this.handleClick(1)}>+</button>
        <button className="btn" onClick={this.handleClick.bind(this, -1)}>-</button>
      </div>
    );
  }
}

export default Counter;