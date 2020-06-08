import React, { Component } from "react";
import "./Login.css";
import img from "../../images/login_img.svg";
import logo from "../../images/logo.png";

class Login extends Component {
  render() {
    return (
      <div className="login_page">
        <div className="login_fields">
          <div className="login_nav">
            <img src={logo} height="70" width="70" alt="" />
            <div className="login_text">
              <p>Login</p>
              <p>Sign Up</p>
            </div>
          </div>
          <div className="login">
            <div className="text">
              <h3>Log In</h3>
              <p>Login to continue to our app</p>
            </div>
            <div className="email_password">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="login_img">
          <img src={img} alt="Hello" />
        </div>
      </div>
    );
  }
}

export default Login;
