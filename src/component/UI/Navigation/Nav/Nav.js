import React, { Component } from "react";
import Aux from "./../../../../hoc/Auxilary";
import logo from "./../../../../images/logo.png";
import "./Nav.css";
import { connect } from "react-redux";
import { NavLink, Redirect,useHistory } from "react-router-dom";
import { logout } from "../../../../store/actions/authActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify"
import CustomToast from "../../../Toast/CutomToast"


class nav extends Component {
  
  logout = () => {
    this.props.logout();
this.notify()
    return <Redirect to='/'/>;
  };
  notify = () => toast.dark(<CustomToast authError={this.props.authError} />,{
    position:toast.POSITION.BOTTOM_CENTER,
    hideProgressBar: true,
    autoClose: 5000,   
  
  })

  signedInLinks = () => {
    return (
      <ul>
        <li>
        <NavLink to ="/search"> <i className="fa fa-search"> </i>Search</NavLink></li>
        <li>
        <NavLink to="/cart"><i className="fa fa-shopping-cart"> </i>Cart</NavLink>
        </li>
        <li>
         
          <NavLink to="/orders"><FontAwesomeIcon icon={faBoxOpen} style={{fontSize : "15px"}}/>&nbsp;Orders</NavLink>
        </li>
        <li>
          <NavLink to="/profile"><i className="fa fa-user"> </i>Profile</NavLink>
        </li>

        <li>
          <a href="/" className="logout" style={{color:"white"}} onClick={this.logout} >
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
          <NavLink to="/">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup"> Sign Up</NavLink>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <Aux>
        <header>
          <nav className="navigation" id="navigation">
            <div>
              <NavLink to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="logo"
                  style={{ float: "left" }}
                />
              </NavLink>
            </div>
            <div className="desktop">
              {this.props.auth.uid
                ? this.signedInLinks()
                : this.signedOutLinks()}
            </div>
            <div className="mobile">
              <ul>
                <li>
                
                  <NavLink to ="/search"> <i className="fa fa-search"> Search</i></NavLink>
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
              className="fa fa-shopping-cart"
              style={{ fontSize: "32px", width: "22%" }}
            ></i>
          </div>
          <div className="flex-item">
            <FontAwesomeIcon icon={faBoxOpen}
              style={{ fontSize: "30px", width: "22%" }}
            />
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
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(nav);
