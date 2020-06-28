import React, { Component } from "react";
import "./Login.css";
import Aux from "./../../hoc/Auxilary";
import img from "../../images/login_img.svg";
import { connect } from "react-redux";
import {login} from "../../store/actions/authActions"
import {Redirect} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';


class Login extends Component {
  state = {
    email: "",
    password: "", 
    loading:true,
  };
  handlchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state)
      this.setState({loading:false})
   
    return <Redirect to ="/" />
  
  };



  render() {
    const {authError,auth} = this.props;
    if(localStorage.getItem("signIn")) return <Redirect to ="/" />
    return (
      <Aux>
        <div className="login_page" style={{ marginTop: "60px" }}>
          <div className="login_fields">
          
            <div className="login">
              <div className="login-text">
                <h3>Log In</h3>
                <p>Login to continue to our app</p>
              </div>
              <div className="email_password">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handlchange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handlchange}
                />
                <button onClick={this.handleLogin}> Login</button>
            <h5 style={{color:"red",marginLeft:"1rem"}}>{authError?authError:null}</h5>

              </div>
            </div>
          </div>
          <div className="hr"></div>
          <div className="login_img">
            <img src={img} alt="Hello" />
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) =>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth,
      isSignIn: state.auth.isSignIn
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    login:(credentials) => dispatch(login(credentials))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);