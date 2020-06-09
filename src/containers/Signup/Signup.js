import React, { Component } from "react";
import "../Login/Login.css"
import Aux from './../../hoc/Auxilary';
import Nav from './../../component/UI/Navigation/Nav/Nav';
import img from "../../images/login_img.svg"
import Footer from "../../component/Footer/Footer";
import {connect} from "react-redux"
import {signUp} from "../../store/actions/authActions"

class SignUp extends Component{
state ={
     name:"",
     email:"",
     password:"",
}

handleChange = e =>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
handleSignUp = e =>{
    e.preventDefault();
    this.props.signUp(this.state)
}
 
    render(){
  return (
    <Aux>
        <Nav/>
        <div className="login_page" style={{marginTop : "60px"}}>
            <div className="login_fields">
                {/*<div className="login_nav">*/}
                {/*    <img src={logo} height="70" width="70" alt=""/>*/}
                {/*    <div className="login_text">*/}
                {/*        <p>Login</p>*/}
                {/*        <p>Sign Up</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="login">
                    <div className="login-text">
                        <h3>Sign Up</h3>
                        <p>Create an account to explore...</p>
                    </div>
                    <div className="email_password">
                        <input type="name" placeholder="Name" name="name" onChange={this.handleChange}/>
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                        <button onClick={this.handleSignUp}>Sign Up</button>
                    </div>

                </div>
            </div>
            <div className="hr"></div>
            <div className="login_img">
                <img src={img} alt="Hello"/>

            </div>
        </div>
        <Footer/>
    </Aux>
  );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
signUp:(credentials) => dispatch(signUp(credentials))
    }
}
export default connect(null,mapDispatchToProps)(SignUp);
