import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import profileImg from "../../images/avatar.png";

class Profile extends Component {
  render() {
    const { name } = this.props.profile;
    const { uid, email } = this.props.auth;

    if (!this.props.auth.uid) return <Redirect to="/login" />;
    return (
      <div className="profile">
        <div className="profile_pic">
          <img src={profileImg} />
          <i className="fa fa-pencil"></i>
        </div>
        <div className="user_detail">
          <h1>{name}</h1>
          <h4>{email}</h4>
        </div>
        <div className="danger_section">
          <button className="change_pass">Change Password</button>
          <button className="delete_ac">Delete Account</button>
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
export default connect(mapStateToProps)(Profile);
