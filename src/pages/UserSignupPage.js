import React from "react";

export class UserSignupPage extends React.Component {
  state = {
    displayName: "",
    userName: "",
    password: "",
    passwordRepeat: "",
  };

  onChangeDisplayName = (event) => {
    const value = event.target.value;
    this.setState({ displayName: value });
  };

  onChangeUserName = (event) => {
    const value = event.target.value;
    this.setState({ userName: value });
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    this.setState({ password: value });
  };

  onChangePasswordRepeat = (event) => {
    const value = event.target.value;
    this.setState({ passwordRepeat: value });
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <input
            placeholder="Your display name"
            value={this.state.displayName}
            onChange={this.onChangeDisplayName}
          ></input>
        </div>
        <div>
          <input
            placeholder="Your username"
            value={this.state.userName}
            onChange={this.onChangeUserName}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.onChangePassword}
          ></input>
        </div>

        <div>
          <input
            type="password"
            placeholder="Repeat your password"
            value={this.state.passwordRepeat}
            onChange={this.onChangePasswordRepeat}
          ></input>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default UserSignupPage;
