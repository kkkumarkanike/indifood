import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
        <div className="contact_text">Want to get Notified...</div>
        <div className="contact_input">
          <input type="email" placeholder="Email address" />
          <button className="send_icon"><i className="fa fa-arrow-up"></i></button>
          <button className="send_button">Send</button>
        </div>
      </div>
    )
}

export default Contact
