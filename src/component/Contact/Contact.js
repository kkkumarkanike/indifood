import React, { Component } from 'react'
import "./Contact.css"
import {connect} from "react-redux"
import {submitContact, showLoader, hideLoader} from "../../store/actions/contactAction"
import spinner from '../UI/Spinner/Spinner'
import Loader from '../Loader/Loader'


class Contact extends Component {

  state={
    name:"",
    email:"",
    message:"",
    loading:false,
  }
  
handleChange = e =>{
  this.setState({[e.target.name] : e.target.value})
}
handleContactSubmit = e =>{
  e.preventDefault();

  const {name,email,message} = this.state;

  if(name.length<3 || email.length<3 || message.length<3){
    this.props.hideLoader()
    return alert("Please provide all the fields...")
  }
  this.props.showLoader()

   this.props.submitContact({
     name,email,message
   })
   

}

  render(){
if(this.props.loading === true) return <Loader />
    return (
        <div className="contact">

<div className="contact_card">
<h2>Contact Us</h2>
       <div className="contact_input_fields">
         <input type="text" name="txt" placeholder="Name" name="name"onChange={this.handleChange}/>
         <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
         <textarea placeholder="Message" type="text" name="message" onChange={this.handleChange}></textarea>
    <button onClick={this.handleContactSubmit}>Send Message</button>
     </div>
</div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    loading:state.contact.loading
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    submitContact : (contactDetails) => dispatch(submitContact(contactDetails)),
    showLoader:() => dispatch(showLoader()),
    hideLoader:() => dispatch(hideLoader())

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact)
