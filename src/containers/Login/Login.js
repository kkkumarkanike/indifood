import React, { Component } from "react";
import "./Login.css";
import Aux from "./../../hoc/Auxilary";
import img from "../../images/login_img.svg";
import Nav from "../../component/UI/Navigation/Nav/Nav";
import Landing from "../../component/UI/LandingImage/LandImg";
import Footer from "../../component/Footer/Footer";
import { connect } from "react-redux";
import {login} from "../../store/actions/authActions"

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handlchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.login(this.state)
    if(this.props.authError !=null){
        return this.props.history.push("/")
    }
  };

  render() {
    //   console.log(this.props)
    const {authError} = this.props;
    return (
      <Aux>
        <Nav />
        <div className="login_page" style={{ marginTop: "60px" }}>
          <div className="login_fields">
            {/*<div className="login_nav">*/}
            {/*    <img src={logo} height="70" width="70" alt=""/>*/}
            {/*    <div className="login_text">*/}
            {/*         <p>Login</p>*/}
            {/*         <p>Sign Up</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
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
                <button onClick={this.handleLogin}>Login</button>
            {authError?<h4>{authError}</h4>:null}

              </div>
            </div>
          </div>
          <div className="hr"></div>
          <div className="login_img">
            <img src={img} alt="Hello" />
          </div>
        </div>
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = (state) =>{
    // console.log(state)
    return{
        authError:state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    login:(credentials) => dispatch(login(credentials))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);