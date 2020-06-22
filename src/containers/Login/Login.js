import React, { Component } from "react";
import "./Login.css";
import Aux from "./../../hoc/Auxilary";
import img from "../../images/login_img.svg";
import Nav from "../../component/UI/Navigation/Nav/Nav";
import Landing from "../../component/UI/LandingImage/LandImg";
import Footer from "../../component/Footer/Footer";
import { connect } from "react-redux";
import {login} from "../../store/actions/authActions"
import {Redirect} from "react-router-dom"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from "../../component/Toast/CutomToast"


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
    this.props.login(this.state)
    this.notify()
    return <Redirect to ="/" />
  
  };

  notify = () => toast.dark(<CustomToast authError={this.props.authError} />,{
    position:toast.POSITION.BOTTOM_CENTER,
    hideProgressBar: true,
    autoClose: 5000,   
  
  })

  render() {
    const {authError,auth} = this.props;
    if(auth.uid) return <Redirect to ="/" />
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
                <button onClick={this.handleLogin}>Login</button>
            {/* {authError?this.notify:null} */}

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
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    login:(credentials) => dispatch(login(credentials))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);