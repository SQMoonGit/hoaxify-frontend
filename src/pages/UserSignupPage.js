import React from "react";

export class UserSignupPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <input placeholder="Your display name"></input>
        </div>
        <div>
          <input placeholder="Your username"></input>
        </div>
        <div>
          <input type="password" placeholder="Your password"></input>
        </div>

        <div>
          <input type="password" placeholder="Repeat your password"></input>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default UserSignupPage;
