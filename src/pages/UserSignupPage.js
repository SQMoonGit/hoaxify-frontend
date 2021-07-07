import React from "react";

export class UserSignupPage extends React.Component {
  state = {
    displayName: "",
    userName: "",
    password: "",
    passwordRepeat: "",
    pendingApiCall: false,
    errors: {},
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

  onClickSignup = () => {
    const user = {
      userName: this.state.userName,
      displayName: this.state.displayName,
      password: this.state.password,
    };
    this.setState({ pendingApiCall: true });
    this.props.actions
      .postSignup(user)
      .then((response) => {
        this.setState({ pendingApiCall: false });
      })
      .catch((apiError) => {
        let errors = { ...this.state.errors };
        if (apiError.response.data && apiError.response.data.validationErrors) {
          errors = { ...apiError.response.data.validationErrors };
        }
        this.setState({ pendingApiCall: false, errors });
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Sign Up</h1>

        <div className="col-12 mb-3">
          <label>Display Name</label>
          <input
            className="form-control"
            placeholder="Your display name"
            value={this.state.displayName}
            onChange={this.onChangeDisplayName}
          ></input>
          <div className="invalid-feedback">
            {this.state.errors.displayName}
          </div>
        </div>

        <div className="col-12 mb-3">
          <label>Username</label>
          <input
            className="form-control"
            placeholder="Your username"
            value={this.state.userName}
            onChange={this.onChangeUserName}
          ></input>
        </div>

        <div className="col-12 mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.onChangePassword}
          ></input>
        </div>

        <div className="col-12 mb-3">
          <label>Password Repeat</label>
          <input
            className="form-control"
            type="password"
            placeholder="Repeat your password"
            value={this.state.passwordRepeat}
            onChange={this.onChangePasswordRepeat}
          ></input>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={this.onClickSignup}
            disabled={this.state.pendingApiCall}
          >
            {this.state.pendingApiCall && (
              <div className="spinner-border text-light spinner-border-sm mr-sm-1">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

UserSignupPage.defaultProps = {
  actions: {
    postSignup: () =>
      new Promise((resolve, reject) => {
        resolve({});
      }),
  },
};

export default UserSignupPage;
