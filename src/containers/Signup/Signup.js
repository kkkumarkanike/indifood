import React from "react";
import "../Login/Login.css"
import Aux from './../../hoc/Auxilary';
import Nav from './../../component/UI/Navigation/Nav/Nav';
import img from "../../images/login_img.svg"
import Footer from "../../component/Footer/Footer";

function SignUp() {
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
                        <input type="name" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button>Sign Up</button>
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

export default SignUp;
