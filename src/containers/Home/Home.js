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

const home = props =>{
     return(
          <Aux>
              <Nav/>
              <Landing/>
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
              <br/><br/><br/><br/><br/><br/>
          </Aux>
     );
}

export default home;