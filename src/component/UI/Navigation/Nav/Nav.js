import React, { Component } from "react";
import Aux from "./../../../../hoc/Auxilary";
import logo from "./../../../../images/logo.png";
import "./Nav.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../../store/actions/authActions";

class nav extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    // console.log(this.props)
    return (
      <Aux>
        <header>
          <nav className="navigation" id="navigation">
            <div>
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="logo"
                  style={{ float: "left" }}
                />
              </Link>
            </div>
            <div className="desktop">
              {this.props.auth.uid ?
              <ul>
                <li>Cart</li>
                <li>Profile</li>
                <li>Search</li>
                <li>About</li>
              </ul>
              :
              <ul>
                <li>
                  <Link to="login">Login</Link>
                </li>
                <li>
                  <Link to="signup"> Sign Up</Link>
                </li>
                <li>
                  <a onClick={this.logout} to="LogOut">
                    LogOut
                  </a>
                </li>
              </ul>
              }
            </div>
            <div className="mobile">
              <ul>
                <li>
                  <input
                    type="text"
                    placeholder="search here..."
                    className="search"
                    name="search"
                    id=""
                  />
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="bottom-navigation">
          <div className="flex-item">
            <i
              className="fa fa-home"
              style={{ fontSize: "32px", width: "22%" }}
            ></i>
          </div>
          <div className="flex-item">
            <i
              className="fa fa-home"
              style={{ fontSize: "32px", width: "22%" }}
            ></i>
          </div>
          <div className="flex-item">
            <i
              className="fa fa-shopping-cart"
              style={{ fontSize: "32px", width: "22%" }}
            ></i>
          </div>
          <div className="flex-item">
            <i
              className="fa fa-user"
              style={{ fontSize: "32px", width: "22%" }}
            ></i>
          </div>
        </div>
      </Aux>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(nav);
