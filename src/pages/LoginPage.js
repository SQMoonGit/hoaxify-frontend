import React from "react";
import Input from "../components/input";

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Login</h1>
        <div className="col-12 mb-3">
          <Input label="Username" placeholder="Your username"></Input>
        </div>
        <div className="col-12 mb-3">
          <Input
            label="Password"
            type="password"
            placeholder="Your password"
          ></Input>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
