import React from 'react';
import img from '../../images/img2.jpg';
import './MobileCard.css';
import Aux from './../../hoc/Auxilary';
import { Link } from 'react-router-dom';

function MobileCard(props) {

  return (
    <Aux>
      <Link to={'/details/' + props.id}>
        <div className='single-card'>
          <div className='card'>
            <div className=''>
              <img height='80' width='80' src={props.details.img} />
            </div>
            <div className='desc'>
              <div className='heading'>{props.details.title}</div>
              <p style={{ margin: 0 }}>{props.details.desc}</p>
              <div className='hr'></div>
              <div className='rating_time'>
                <p>
                  <i className='fa fa-star'></i>
                  {3.5}
                </p>
                <p>31 min</p>
                <p>
                  <i className='fa fa-rupee rupee'></i>
                  {props.details.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className='line'></div>
      {/*style={{padding : "2px",backgroundColor : "red"}}*/}
    </Aux>
  );
}

export default MobileCard;
