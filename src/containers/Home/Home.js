import React, {useEffect} from 'react';
import './Home.css';
import {connect} from 'react-redux';
import Aux from './../../hoc/Auxilary';
import Nav from './../../component/UI/Navigation/Nav/Nav';
import Landing from './../../component/UI/LandingImage/LandImg';
import Footer from './../../component/Footer/Footer';
import Contact from './../../component/Contact/Contact';
import About from './../../component/About/About';
import Service from './../../component/Service/Service';
import MobileCard from './../../component/FoodCard/MobileCard';
<<<<<<< HEAD
import {connect} from "react-redux"
import { Redirect } from 'react-router';

const home = props =>{

    const {auth} = props;

if(!auth.uid) return <Redirect to="/login" />
=======
import {getItems} from "../../store/actions/itemActions";

const home = (props) =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        props.getItems();
    },[]);

    let mobileCards = null;
    if (props.foodItems){
        mobileCards = props.foodItems.map(item =>{
            return <MobileCard details={item}/>;
        })
    }
>>>>>>> 0c1712e30b4c95ecc2768742ef1d5d29b7349b3f
     return(
          <Aux>
              <Nav/>
            <div id="landing">
            <Landing/>
            </div>
              <div className="mobile" >
                  <div style={{margin : "0 20px 0 20px"}}>
                      <h3>Special Items</h3>
                      {mobileCards}
                      {mobileCards}
                      {mobileCards}
                      {mobileCards}
                      <p style={{float : "right", marginTop:"10px"}}>view more</p>
                      <br/>
                  </div>
                  <div style={{margin : "0 20px 0 20px"}}>
                      <h3>Veg</h3>
                      {mobileCards}
                      {mobileCards}
                      {mobileCards}
                      {mobileCards}
                      <p style={{float : "right", marginTop:"10px"}}>view more</p>
                      <br/><br/>
                  </div>
                  <div style={{margin : "0 20px 0 20px"}}>
                      <h3>Non Veg</h3>
                      {mobileCards}
                      {mobileCards}
                      {mobileCards}
                      {mobileCards}
                      <p style={{float : "right", marginTop:"10px"}}>view more</p>
                      <br/><br/>
                  </div>
              </div>
              <div className="desk">
                  <div style={{margin : "0 80px"}}>
                      <p className="main-heading" style={{margin : 0, padding : 0}}>Special Items</p>
                      <Service/>
                      <p style={{float : "right"}}><u>view more</u></p>
                      <p className="main-heading">Veg</p>
                      <Service/>
                      <p style={{float : "right"}}><u>view more</u></p>
                      <p className="main-heading">Non Veg</p>
                      <Service/>
                      <p style={{float : "right"}}><u>view more</u></p>
                  </div>
              </div>
              <br/><br/>
              <Contact/>
              {/*<About/>*/}
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
<<<<<<< HEAD
auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(home);
=======
        foodItems: state.item.res
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getItems:() => dispatch(getItems())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(home);
>>>>>>> 0c1712e30b4c95ecc2768742ef1d5d29b7349b3f
