import { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      color: null,
      isAdmin: false,
      inputColor: null,
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleIsAdminChange = (event) => {
    this.setState({ isAdmin: event.target.checked });
  };

  componentDidMount() {
    this.setState({ inputColor: "red" });
  }

  render() {
    return (
      <div className="over-form">
      <form className="form-container">
        <div>
          <label className="label-set">Username: </label>
          <input
            type="text"
            value={this.state.username}
            style={{ color: this.state.inputColor }}
            onChange={this.handleChange}
            name="username"
          />
        </div>
        <div>
          <label className="label-set">Password: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <div>
            <label className="label-set">Color: </label>
            <select
              value={this.state.color}
              onChange={this.handleChange}
              name="color"
            >
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
            </select>
          </div>
          <div>
            <label className="label-set">isAdmin: </label>
            <input
              type="checkbox"
              checked={this.state.isAdmin}
              onChange={this.handleIsAdminChange}
            />
          </div>
        </div>
        <button className="btn-set" onClick={this.handleLogin}>Login</button>
      </form>
      </div>
    );
  }
}

export default LoginForm;
