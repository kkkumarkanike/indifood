import React,{Component} from "react";
import "./Footer.css";
import { connect } from "react-redux";
import Aux from "./../../hoc/Auxilary";
import { Link } from "react-router-dom";

class Footer extends Component {

    signedInLinks = () =>{
        return(
          <ul>
          <li><Link to="/">Home</Link></li>
         <li><Link to="about">About</Link></li>
         <li><Link to="menu">Menu</Link></li>
         <li><Link to="contact">Contact</Link></li>
        
         {/* <li>
           <a onClick={this.logout} to="LogOut">
             LogOut
           </a>
         </li> */}
       </ul>
        )
      }

      signedOutLinks = () =>{
        return(
          <ul>
          <li><Link to="/">Home</Link></li>
         <li><Link to="contact">Contact</Link></li>
       </ul>
        )
      }

  render() {
    return (
      <footer className="footer">
        <div className="social_icons">
          <i className="fa fa-facebook facebook"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-github"></i>
        </div>
        <div className="nav_links">
          {this.props.auth.uid ? (
            <Aux>
              {/* <p>Home</p>
              <p>Menu</p>
              <p>About</p>
              <p>Contact</p> */}
              {this.signedInLinks()}
            </Aux>
          ) : (
            <Aux>
              {/* <p>About</p>
              <p>Contact</p> */}
              {this.signedOutLinks()}
            </Aux>
          )}
        </div>
        <div className="copy_right">Copyright &copy; IndiFood</div>
      </footer>
    );
  }
}
const mapStateToProps = (state) => {
    console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Footer);
