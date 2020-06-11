import React, { Component } from "react";
import Aux from "./../../../../hoc/Auxilary";
import logo from "./../../../../images/logo.png";
import "./Nav.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logout } from "../../../../store/actions/authActions";

class nav extends Component {
  logout = () => {
    this.props.logout();
    return <Redirect to="/login" />
  };

  signedInLinks = () => {
    return (
      <ul>
        <li>
        <Link to ="/search"> <i className="fa fa-search"> </i>Search</Link></li>
        <li>
        <Link to="/cart"><i className="fa fa-shopping-cart"> </i>Cart</Link>
        </li>
        <li>
         
          <Link to="/orders"><i className="fa fa-box-open"> </i>Orders</Link>
        </li>
        <li>
          <Link to="/profile"><i className="fa fa-user"> </i>Profile</Link>
        </li>

        <li>
          <a className="logout" style={{color:"white"}} onClick={this.logout} to="LogOut">
            LogOut
          </a>
        </li>
      </ul>
    );
  };

  signedOutLinks = () => {
    return (
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup"> Sign Up</Link>
        </li>
      </ul>
    );
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
<<<<<<< HEAD
              {this.props.auth.uid
                ? this.signedInLinks()
                : this.signedOutLinks()}
=======
              {this.props.auth.uid ?
              <ul>
                <li>Cart</li>
                <li>Profile</li>
                <li>Search</li>
                <li>About</li>
                <li>
                  <a onClick={this.logout} to="LogOut">
                    LogOut
                  </a>
                </li>
              </ul>
              :
              <ul>
                <li>
                  <Link to="login">Login</Link>
                </li>
                <li>
                  <Link to="signup"> Sign Up</Link>
                </li>

              </ul>
              }
>>>>>>> 0c1712e30b4c95ecc2768742ef1d5d29b7349b3f
            </div>
            <div className="mobile">
              <ul>
                <li>
                
                  <Link to ="/search"> <i className="fa fa-search"> Search</i></Link>
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
  console.log("STATE",state)
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(nav);
