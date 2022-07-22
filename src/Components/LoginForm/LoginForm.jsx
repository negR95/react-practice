import { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form>
        <div>
          <label>Username: </label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <button onClick={this.handleLogin}>Login</button>
      </form>
    );
  }
}

export default LoginForm;
