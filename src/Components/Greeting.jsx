import React from "react";
import "./Counter.css";

class Greeting extends React.Component {

  render() {
    const { isLoggedIn, name } = this.props;

    if (isLoggedIn) {
      return <p className="greeting-paragraph">{`Hello, ${name}!`}</p>
    } else {
      return <p className="greeting-paragraph">{`Please Log in first!`}
      </p>
    }
  }
}


export default Greeting;
