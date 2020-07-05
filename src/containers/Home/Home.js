import React, { useEffect } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import Aux from './../../hoc/Auxilary';
import Nav from './../../component/UI/Navigation/Nav/Nav';
import Landing from './../../component/UI/LandingImage/LandImg';
import Footer from './../../component/Footer/Footer';
import Contact from './../../component/Contact/Contact';
import Service from '../../component/Service/SpecialService';
import MobileCard from './../../component/FoodCard/MobileCard';
import Maps from '../../component/Maps/Maps';
import { Link } from 'react-router-dom';
import {
  getCartItems,
  getItems,
  getVegItems,
  getSpecialItems,
  getNonVegItems,
} from '../../store/actions/itemActions';
import VegService from '../../component/Service/VegService';
import NonVegService from '../../component/Service/NonVegService';

const home = (props) => {
  const { auth } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // props.getItems();
    props.getSpecialItems();
    props.getVegItems();
    props.getNonVegItems();
    props.onGetCartItems();
  }, []);

  let mobileCards = null;
  let specialMobileCards = null;
  let vegMobileCards = null;
  let nonVegMobileCards = null;
  if (props.specialItems) {
    const keys = Object.keys(props.specialItems);
    specialMobileCards = keys.map((id) => {
      return <MobileCard details={props.specialItems[id]} id={id} />;
    });
  }
  console.log('Special Mobile Card', props.specialItems);
  if (props.vegItems) {
    const keys = Object.keys(props.vegItems);
    vegMobileCards = keys.map((id) => {
      return <MobileCard details={props.vegItems[id]} id={id} />;
    });
  }
  if (props.nonVegItems) {
    const keys = Object.keys(props.nonVegItems);
    nonVegMobileCards = keys.map((id) => {
      return <MobileCard details={props.nonVegItems[id]} id={id} />;
    });
  }
  return (
    <Aux>
      <Nav />
      <div id='landing'>
        <Landing />
      </div>
      <div className='mobile'>
        <div style={{ margin: '0 20px 0 20px' }}>
          <h3 className='categoryNames'>Special Items</h3>
          {specialMobileCards}

          <br />
        </div>
        <div style={{ margin: '0 20px 0 20px' }}>
          <h3 className='categoryNames'>Veg</h3>
          {vegMobileCards}

          <Link to='/veg' className='mobile_vm' style={{ color: '#ff5e62' }}>
            view more
          </Link>
          <br />
          <br />
        </div>
        <div style={{ margin: '0 20px 0 20px' }}>
          <h3 className='categoryNames'>Non Veg</h3>
          {nonVegMobileCards}

          <Link to='/nonveg' className='mobile_vm' style={{ color: '#ff5e62' }}>
            view more
          </Link>
          <br />
          <br />
        </div>
      </div>
      <div className='desk'>
        <div style={{ margin: '0 80px' }}>
          <h3 className='categoryNames' style={{ margin: 0, padding: 0 }}>
            Special Items
          </h3>
          <Service />
          {/* <p style={{ float: "right" }}>
            <u>view more</u>
          </p> */}
          <h3 className='categoryNames'>Veg</h3>
          <VegService />
          <div className='viewMoreBtn'>
            <Link to='/veg'>
              <button>view more</button>
            </Link>
          </div>

          <h3 className='categoryNames'>Non Veg</h3>
          <NonVegService />
          <div className='viewMoreBtn'>
            <Link to='/nonveg'>
              <button>view more</button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Contact />
      <Maps />
      {/*<About/>*/}
      <Footer />

      <div className='goTop'>
        <a href='#landing'>
          <i className='fa fa-arrow-up'></i>
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
    specialItems: state.item.specialItems,
    vegItems: state.item.vegItems,
    nonVegItems: state.item.nonVegItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSpecialItems: () => dispatch(getSpecialItems()),
    getVegItems: () => dispatch(getVegItems()),
    getNonVegItems: () => dispatch(getNonVegItems()),
    onGetCartItems: () => dispatch(getCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
