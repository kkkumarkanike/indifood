import React from 'react'
import "./Footer.css";
import {connect} from 'react-redux';
import Aux from './../../hoc/Auxilary';
import {Link} from "react-router-dom"

function Footer(props) {
    return (
        <footer className="footer">
            <div className="social_icons">
                <i className="fa fa-facebook facebook"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-github"></i>
            </div>
            <div className="nav_links">
                {props.isSignIn ?
                    <Aux>
                        <p>Home</p>
                        <p>Menu</p>
                        <p>About</p>
                        <p>Contact Us</p>
                    </Aux>
                    :
                    <Aux>
                      <p>About</p>
                        <p>Contact Us</p>
                    </Aux>
                }
            </div>
            <div className="copy_right">
                Copyright &copy; IndiFood
            </div>
        </footer>
    )
}
const mapStateToProps = state =>{
    return {
        isSignIn: state.isSignIn
    }
}
export default connect(mapStateToProps)(Footer);
