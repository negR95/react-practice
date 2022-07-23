import React from "react";
import FormattedDate from "./FormattedDate";
import randomColor from "randomcolor";

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          date: new Date(),
          color: randomColor(),
        })
      }, 1000);
  }

  render() {
    return (
      <div className="color-set">
        <FormattedDate  date={this.state.date} color={this.state.color} />
      </div>
    );
  };
}

export default Clock;