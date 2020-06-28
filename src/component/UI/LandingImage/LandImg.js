import React from 'react';
import Aux from './../../../hoc/Auxilary';
import './LangImg.css';
import banner from './../../../images/landing.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const landImg = (props) => {
  return (
    <Aux>
      <br />
      <section className='landing-image'>
        <div className='text'>
          <div className='layer'></div>
          <p className='head'>IndiFood</p>
          <p className='para'>
            “Succulent pieces of boneless chicken marinated in ginger and
            garlic, spiced with freshly pounded black peppercorns, gram flour
            and chargrilled with beaten egg yolk.”
          </p>
          <button className='get-started'>Get started</button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className='banner-image' style={{ textAlign: 'center' }}>
          <img src={banner} alt='image' className='image' />
        </div>
      </section>
    </Aux>
  );
};

export default landImg;
