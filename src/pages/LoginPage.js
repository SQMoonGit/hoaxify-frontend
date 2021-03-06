import React from "react";
import Input from "../components/input";

export class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    apiError: undefined,
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
      apiError: undefined,
    });
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    this.setState({
      password: value,
      apiError: undefined,
    });
  };

  onClickLogin = () => {
    const body = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.actions.postLogin(body).catch((error) => {
      if (error.response) {
        this.setState({ apiError: error.response.data.message });
      }
    });
  };

  render() {
    let disableSubmit = false;
    if (this.state.username === "" || this.state.password === "") {
      disableSubmit = true;
    }
    return (
      <div className="container">
        <h1 className="text-center">Login</h1>

        <div className="col-12 mb-3">
          <Input
            label="Username"
            placeholder="Your username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          ></Input>
        </div>

        <div className="col-12 mb-3">
          <Input
            label="Password"
            type="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.onChangePassword}
          ></Input>
        </div>

        {this.state.apiError && (
          <div className="col-12 mb-3">
            <div className="alert alert-danger">{this.state.apiError}</div>
          </div>
        )}

        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={this.onClickLogin}
            disabled={disableSubmit}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  actions: {
    postLogin: () => new Promise((resolve, reject) => resolve({})),
  },
};

export default LoginPage;
