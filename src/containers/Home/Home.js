import React, { useEffect } from "react";
import "./Home.css";
import { connect } from "react-redux";
import Aux from "./../../hoc/Auxilary";
import Nav from "./../../component/UI/Navigation/Nav/Nav";
import Landing from "./../../component/UI/LandingImage/LandImg";
import Footer from "./../../component/Footer/Footer";
import Contact from "./../../component/Contact/Contact";
import About from "./../../component/About/About";
import Service from "./../../component/Service/Service";
import MobileCard from "./../../component/FoodCard/MobileCard";
import { Redirect } from "react-router";
import {getCartItems, getItems} from "../../store/actions/itemActions";

const home = (props) => {
  const { auth } = props;


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    props.getItems();
  }, []);

  let mobileCards = null;
  if (props.foodItems) {
    console.log(props.foodItems);
    const keys = Object.keys(props.foodItems);
    mobileCards = keys.map((id) => {
      return <MobileCard details={props.foodItems[id]} />;
    });
  }
  return (
    <Aux>
      <Nav />
      <div id="landing">
        <Landing />
      </div>
      <div className="mobile">
        <div style={{ margin: "0 20px 0 20px" }}>
          <h3>Special Items</h3>
          {mobileCards}
          <p style={{ float: "right", marginTop: "10px" }}>view more</p>
          <br />
        </div>
        <div style={{ margin: "0 20px 0 20px" }}>
          <h3>Veg</h3>
          {mobileCards}

          <p style={{ float: "right", marginTop: "10px" }}>view more</p>
          <br />
          <br />
        </div>
        <div style={{ margin: "0 20px 0 20px" }}>
          <h3>Non Veg</h3>
          {mobileCards}

          <p style={{ float: "right", marginTop: "10px" }}>view more</p>
          <br />
          <br />
        </div>
      </div>
      <div className="desk">
        <div style={{ margin: "0 80px" }}>
          <p className="main-heading" style={{ margin: 0, padding: 0 }}>
            Special Items
          </p>
          <Service />
          <p style={{ float: "right" }}>
            <u>view more</u>
          </p>
          <p className="main-heading">Veg</p>
          <Service />
          <p style={{ float: "right" }}>
            <u>view more</u>
          </p>
          <p className="main-heading">Non Veg</p>
          <Service />
          <p style={{ float: "right" }}>
            <u>view more</u>
          </p>
        </div>
      </div>
      <br />
      <br />
      <Contact />
      {/*<About/>*/}
      <Footer />

      <div className="goTop">
        <a href="#landing">
          <i className="fa fa-arrow-up"></i>
        </a>
      </div>
      {/* <br/><br/><br/><br/><br/><br/> */}
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    foodItems: state.item.res,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getItems()),
    onGetCartItems : () => dispatch(getCartItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
