import React, { Component } from 'react';
import './Contact.css';
import { connect } from 'react-redux';
import {
  submitContact,
  showLoader,
  hideLoader,
} from '../../store/actions/contactAction';
import spinner from '../UI/Spinner/Spinner';
import Loader from '../Loader/Loader';
import CustomToast from '../../component/Toast/CutomToast';
import { toast } from 'react-toastify';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    loading: false,
    disabled: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    if (name.length < 3 || email.length < 3 || message.length < 3) {
      // this.props.hideLoader()
      this.setState({ disabled: false });

      // return alert('Please provide all the fields...');
      return toast.error(
        <CustomToast authError='Please provide all the fields...' />,
        {
          position: toast.POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
          autoClose: 5000,
        }
      );
    }
    this.setState({ disabled: !this.state.disabled });

    // this.props.showLoader()

    // this.props.submitContact({
    //   name,
    //   email,
    //   message,
    // });
    this.notify();
  };
  notify = () =>
    toast.success(<CustomToast authError='We Have Received Your Info...' />, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 5000,
    });

  render() {
    if (this.props.loading === true) return <Loader />;
    return (
      <div className='contact'>
        <div className='contact_card'>
          <h2>Contact Us</h2>
          <div className='contact_input_fields'>
            <input
              type='text'
              name='txt'
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
            <textarea
              placeholder='Message'
              type='text'
              name='message'
              onChange={this.handleChange}
            ></textarea>
            <button
              onClick={this.handleContactSubmit}
              disabled={this.state.disabled}
            >
              Send Message
            </button>
          </div>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.contact.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitContact: (contactDetails) => dispatch(submitContact(contactDetails)),
    // showLoader:() => dispatch(showLoader()),
    // hideLoader:() => dispatch(hideLoader())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
