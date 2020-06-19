import React, { Component } from "react";
import Aux from "./../../../../hoc/Auxilary";
import logo from "./../../../../images/logo.png";
import "./Nav.css";
import { connect } from "react-redux";
import { NavLink, Redirect,useHistory ,Link} from "react-router-dom";
import { logout } from "../../../../store/actions/authActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoxOpen, faSignInAlt, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import About from "../../../About/About";


class nav extends Component {

    logout = () => {
    this.props.logout();
    return <Redirect to='/'/>;
  };
  activeSignUp = () =>{
      document.querySelector('#login').classList.remove('active');

    }
   activeLogin = () =>{
       document.querySelector('#signup').classList.remove('active');
       document.querySelector('#login').classList.add('active');
   }
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
          <Link to="/" className="logout" style={{color:"white"}} onClick={this.logout} >
            LogOut
          </Link>
        </li>
      </ul>
    );
  };

  signedOutLinks = () => {
    return (
      <ul>
        <li>
          <NavLink to="/" id="login" onClick={this.activeLogin}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup" id="signup" onClick={this.activeSignUp}> Sign Up</NavLink>
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
              {localStorage.getItem('signIn')
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
            {localStorage.getItem('signIn') ?

               <Aux>
                   <Link to='/'>
                       <div className="flex-item" style={{width: "22%"}}>
                           <i
                               className="fa fa-home"
                               style={{ fontSize: "22px",margin:0,padding:0}}
                           ></i><br/>
                           <span style={{fontSize : "10px",margin:0,padding:0}}>HOME</span>
                       </div>
                   </Link>
                   <Link to='/cart'>
                       <div className="flex-item" style={{width: "22%"}}>
                           <i
                               className="fa fa-shopping-cart"
                               style={{ fontSize: "22px",margin:0,padding:0}}
                           ></i><br/>
                           <span style={{fontSize : "10px",margin:0,padding:0}}>CART</span>
                       </div>
                   </Link>
                   <Link to='/orders'>
                       <div className="flex-item" style={{width: "22%"}}>
                           <FontAwesomeIcon icon={faBoxOpen}
                                            style={{ fontSize: "20px",margin:0,padding:0}}
                           /><br/>
                           <span style={{fontSize : "10px",margin:0,padding:0}}>ORDERS</span>
                       </div>
                   </Link>
                   <Link to='/profile'>
                       <div className="flex-item" style={{width: "22%"}}>
                           <FontAwesomeIcon icon={faUserAlt}
                                            style={{ fontSize: "20px",margin:0,padding:0}}
                           /><br/>
                           <span style={{fontSize : "10px",margin:0,padding:0}}>PROGILE</span>
                       </div>
                   </Link>
               </Aux> :
                <Aux>
                    <Link to='/'>
                        <div className="flex-item" style={{width: "45%"}}>
                            <FontAwesomeIcon icon={faSignInAlt}
                                             style={{ fontSize: "18px",margin:0,padding:0}}
                            /><br/>
                            <span style={{fontSize : "10px",margin:0,padding:0}}>LOG IN</span>
                        </div>
                    </Link>
                    <Link to='/signup'>
                        <div className="flex-item" style={{width: "45%"}}>
                            <FontAwesomeIcon icon={faUserAlt}
                                             style={{ fontSize: "18px",margin:0,padding:0}}
                            /><br/>
                            <span style={{fontSize : "10px",margin:0,padding:0}}>SIGN UP</span>
                        </div>
                    </Link>
                </Aux>
            }
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
      isSignIn: state.auth.isSignIn
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(nav);
