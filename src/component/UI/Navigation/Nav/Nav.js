import React from 'react';
import Aux from './../../../../hoc/Auxilary';
import logo from './../../../../images/logo.png';
import './Nav.css';
import {connect} from "react-redux";

const nav = (props) =>{
     return (
          <Aux>
               <header>
                    <nav className="navigation" id="navigation">
                         <div><img src={logo} alt="logo" className="logo" style = {{float: "left"}}/></div>
                         <div className="desktop">
                              {props.isSignIn ?
                                   <ul>
                                   <li >Cart</li>
                                   <li >Profile</li>
                                   <li >Search</li>
                                   <li >About</li>
                                   </ul>
                                  :
                                  <ul>
                                       <li >Sign In</li>
                                       <li >Sign Up</li>

                                  </ul>

                              }
                         </div>
                         <div className="mobile">
                              <ul>
                                   <li><input type="text" placeholder="search here..." className="search" name="search" id=""/></li>
                              </ul>
                         </div>
     
                    </nav>
               </header>
               <div className="bottom-navigation">
                    <div className="flex-item"><i className='fa fa-home' style={{fontSize:"32px",width: "22%"}}></i></div>
                    <div className="flex-item"><i className='fa fa-home' style={{fontSize:"32px",width: "22%"}}></i></div>
                    <div className="flex-item"><i className='fa fa-shopping-cart'
                                                  style={{fontSize:"32px",width: "22%"}}></i></div>
                    <div className="flex-item"><i className='fa fa-user' style={{fontSize:"32px",width: "22%"}}></i></div>
               </div>
          </Aux>
     );
}

const mapStateToProps = state =>{
     return {
          isSignIn: state.isSignIn
     }
}


export default connect(mapStateToProps)(nav);