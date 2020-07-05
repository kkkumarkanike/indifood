import React, { Component } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import profileImg from '../../images/avatar_male2.svg';
import { resetPassword, logout } from '../../store/actions/authActions';
import firebase from '../../config/Config';
import CustomToast from '../../component/Toast/CutomToast';
import { toast } from 'react-toastify';

class Profile extends Component {
  state = {
    disabled: false,
  };

  changePass = () => {
    this.setState({ disabled: !this.state.disabled });
    this.props.resetPassword();
    this.notify();
  };
  notify = () =>
    toast.dark(
      <CustomToast authError='We Have Sent You a Reset Mail Please Check It Out...' />,
      {
        position: toast.POSITION.BOTTOM_CENTER,
        hideProgressBar: true,
        autoClose: 3000,
        closeButton: false,
      }
    );
  logoutAction = () => {
    this.props.onLogout();
    this.props.history.replace('/');
  };

  render() {
    const { name } = this.props.profile;
    const currentUser = firebase.auth().currentUser;
    const { uid, email } = this.props.auth;

    if (!this.props.auth.uid) return <Redirect to='/login' />;
    return (
      <div className='profile'>
        <div className='profile_pic'>
          <img src={profileImg} />
        </div>
        <div className='user_detail'>
          <p>Username : {!name ? email.split('@')[0] : name}</p>
          <p>Email : {email}</p>
          {/* <p>Phone : +918919308004</p> */}
        </div>
        <div className='danger_section'>
          <button
            onClick={this.changePass}
            disabled={this.state.disabled}
            className='change_pass'
          >
            CHANGE PASSWORD
          </button>
          {/* <button className="delete_ac">Delete Account</button> */}
          <button onClick={this.logoutAction} className='change_pass'>
            LOGOUT
          </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: () => dispatch(resetPassword()),
    onLogout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
