import React, { Component } from 'react';
import '../Login/Login.css';
import Aux from './../../hoc/Auxilary';
import img from '../../images/login_img.svg';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import 'react-toastify/dist/ReactToastify.css';


class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    
  };
  handleSignUp = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    // this.props.history.replace('/');
  };

  


  render() {
    const { authError, auth } = this.props;
    return (
      <Aux>
        <div className='login_page' style={{ marginTop: '60px' }}>
          <div className='login_fields'>
            <div className='login'>
              <div className='login-text'>
                <h3>Sign Up</h3>
                <p>Create an account to explore...</p>
              </div>
              <div className='email_password'>
                <input
                  type='name'
                  placeholder='Name'
                  name='name'
                  onChange={this.handleChange}
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={this.handleChange}
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSignUp}>Sign Up</button>
                <h5 style={{color:"red",marginLeft:"1rem"}}>{authError?authError:null}</h5>
              </div>
            </div>
          </div>
          <div className='hr'></div>
          <div className='login_img'>
            <img src={img} alt='Hello' />
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) => dispatch(signUp(credentials)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
