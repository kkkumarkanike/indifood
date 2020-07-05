import React, { Component } from 'react';
import Aux from './../../../../hoc/Auxilary';
import logo from './../../../../images/logo.png';
import './Nav.css';
import { connect } from 'react-redux';
import { NavLink, Redirect, Link } from 'react-router-dom';
import { logout } from '../../../../store/actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxOpen,
  faUserAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

class nav extends Component {
  logout = () => {
    this.props.logout();
    return <Redirect to='/' />;
  };

  // activeSignUp = () =>{
  //     document.querySelector('#login').classList.remove('active');

  //   }
  //  activeLogin = () =>{
  //      document.querySelector('#signup').classList.remove('active');
  //      document.querySelector('#login').classList.add('active');
  //  }
  //    activeIcon = () =>{
  // const item = document.querySelector(".names").classList.contains("active");
  // if(item){
  //   console.log(document.querySelectorAll(".flex-item"))
  //   document.querySelector("i").style.color="yellow"
  // }else{
  //   document.querySelector("i").style.color="blue"
  // }
  //    }
  signedInLinks = () => {
    return (
      <ul>
        <li>
          <NavLink to='/search'>
            {' '}
            <i className='fa fa-search'> </i>Search
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart'>
            <i className='fa fa-shopping-cart'> </i>Cart
          </NavLink>
        </li>
        <li>
          <NavLink to='/orders'>
            <FontAwesomeIcon icon={faBoxOpen} style={{ fontSize: '15px' }} />
            &nbsp;Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile'>
            <i className='fa fa-user'> </i>Profile
          </NavLink>
        </li>

        <li>
          <Link
            to='/'
            className='logout'
            style={{ color: 'white' }}
            onClick={this.logout}
          >
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
          <NavLink exact to='/' id='login'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' id='signup'>
            {' '}
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <Aux>
        <header>
          <nav className='navigation' id='navigation'>
            <div>
              <NavLink to='/'>
                <img
                  src={logo}
                  alt='logo'
                  className='logo'
                  style={{ float: 'left' }}
                />
              </NavLink>
              {/* <NavLink to='/search'>
                <div className='nav_search'>
                  <i className='fa fa-search'></i>
                  <p>Search</p>
                </div>
              </NavLink> */}
            </div>
            <div className='desktop'>
              {localStorage.getItem('signIn')
                ? this.signedInLinks()
                : this.signedOutLinks()}
            </div>
            <div className='mobile'></div>
          </nav>
        </header>
        <div className='bottom-navigation'>
          {localStorage.getItem('signIn') ? (
            <Aux>
              <NavLink exact to='/'>
                <div className='flex-item' style={{ width: '22%' }}>
                  <i
                    className='fa fa-home'
                    style={{ fontSize: '22px', margin: 0, padding: 0 }}
                  ></i>
                  <br />
                  <span style={{ margin: 0, padding: 0 }}>HOME</span>
                </div>
              </NavLink>
              <NavLink to='/cart'>
                <div className='flex-item' style={{ width: '22%' }}>
                  <i
                    className='fa fa-shopping-cart'
                    style={{ fontSize: '22px', margin: 0, padding: 0 }}
                  ></i>
                  <br />
                  <span style={{ margin: 0, padding: 0 }}>CART</span>
                </div>
              </NavLink>
              <NavLink to='/orders'>
                <div className='flex-item' style={{ width: '22%' }}>
                  <FontAwesomeIcon
                    className='fa_icon'
                    icon={faBoxOpen}
                    style={{ fontSize: '20px', margin: 0, padding: 0 }}
                  />
                  <br />
                  <span style={{ margin: 0, padding: 0 }}>ORDERS</span>
                </div>
              </NavLink>
              <NavLink to='/profile'>
                <div className='flex-item' style={{ width: '22%' }}>
                  <FontAwesomeIcon
                    className='fa_icon'
                    icon={faUserAlt}
                    style={{ fontSize: '20px', margin: 0, padding: 0 }}
                  />
                  <br />
                  <span style={{ margin: 0, padding: 0 }}>PROFILE</span>
                </div>
              </NavLink>
            </Aux>
          ) : (
            <Aux>
              <NavLink exact to='/'>
                <div className='flex-item' style={{ width: '45%' }}>
                  <FontAwesomeIcon
                    className='fa_icon'
                    icon={faSignInAlt}
                    style={{ fontSize: '18px', margin: 0, padding: 0 }}
                  />
                  <br />
                  <span style={{ margin: 0, padding: 0 }}>LOG IN</span>
                </div>
              </NavLink>
              <NavLink to='/signup'>
                <div className='flex-item' style={{ width: '45%' }}>
                  <FontAwesomeIcon
                    className='fa_icon'
                    icon={faUserAlt}
                    style={{ fontSize: '18px', margin: 0, padding: 0 }}
                  />
                  <br />
                  <span style={{ margin: 0, padding: 0 }}>SIGN UP</span>
                </div>
              </NavLink>
            </Aux>
          )}
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
    isSignIn: state.auth.isSignIn,
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(nav);
