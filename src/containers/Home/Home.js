import React from 'react';
import './Home.css';
import Aux from './../../hoc/Auxilary';
import Nav from './../../component/UI/Navigation/Nav/Nav';
import Landing from './../../component/UI/LandingImage/LandImg';
import Footer from './../../component/Footer/Footer';
import Contact from './../../component/Contact/Contact';
import About from './../../component/About/About';
import Service from './../../component/Service/Service';
import MobileCard from './../../component/FoodCard/MobileCard';
import {connect} from "react-redux"
import { Redirect } from 'react-router';

const home = props =>{

    const {auth} = props;

if(!auth.uid) return <Redirect to="/login" />
     return(
          <Aux>
              <Nav/>
            <div id="landing">
            <Landing/>
            </div>
              <div className="mobile" >
                  <div style={{margin : "0 20px 0 20px"}}>
                      <h4>Veg</h4>
                      <MobileCard/>
                      <MobileCard/>
                      <MobileCard/>
                      <br/>
                  </div>
                  <div style={{margin : "0 20px 0 20px"}}>
                      <h4>Non Veg</h4>
                      <MobileCard/>
                      <MobileCard/>
                      <MobileCard/>
                      <br/>
                  </div>
              </div>
              <div className="desk">
                  <Service/>
              </div>
              <Contact/>
              <Footer/>
         
      <div className="goTop">
        <a href="#landing"><i className="fa fa-arrow-up"></i></a>
      </div>
              {/* <br/><br/><br/><br/><br/><br/> */}
          </Aux>
        
     );
}

const mapStateToProps = (state) =>{
    return{
auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(home);