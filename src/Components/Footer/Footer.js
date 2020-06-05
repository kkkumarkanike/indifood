import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer class="footer">
        <div className="social_icons">
          <i className="fa fa-facebook facebook"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-github"></i>
        </div>
        <div className="nav_links">
          <p>Home</p>
          <p>Menu</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
        <div className="copy_right">
          Copyright &copy; IndiFood
        </div>
      </footer>
    )
}

export default Footer
