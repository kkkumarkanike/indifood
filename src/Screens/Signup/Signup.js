import React from "react";
import "../Login/Login.css"
import img from "../../images/login_img.svg"
import logo from "../../images/logo.png"

function SignUp() {
  return (
    <div className="login_page">
      <div className="login_fields">
       <div className="login_nav">
       <img src={logo} height="70" width="70" alt=""/>
        <div className="login_text">
        <p>Login</p>
        <p>
         Sign Up
        </p>
        </div>
       </div>
       <div className="login">
           <div className="text">
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
  );
}

export default SignUp;
