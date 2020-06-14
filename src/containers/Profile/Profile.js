import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import profileImg from "../../images/avatar.png";
import {resetPassword} from "../../store/actions/authActions"
import firebase from "../../config/Config"
class Profile extends Component {

  changePass =() =>{
    this.props.resetPassword();
  }

  render() {
    const { name } = this.props.profile;
    const currentUser = firebase.auth().currentUser;
    console.log(name)
    const { uid, email } = this.props.auth;

    if (!this.props.auth.uid) return <Redirect to="/login" />;
    return (
      <div className="profile">
        <div className="profile_pic">
          <img src={profileImg} />
          <i className="fa fa-pencil"></i>
        </div>
        <div className="user_detail">
          <p>UserName : {!name?email.split("@")[0] : name}</p>
          <p>Email : {email}</p>
          <p>Phone : +918919308004</p>

        </div>
        <div className="danger_section">
          <button onClick={this.changePass} className="change_pass">Change Password</button>
          {/* <button className="delete_ac">Delete Account</button> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps =(dispatch) =>{
  return{
    resetPassword:() => dispatch(resetPassword())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);
