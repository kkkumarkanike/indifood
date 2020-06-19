import React, {useEffect} from "react";
import Aux from './../../hoc/Auxilary';
import './ItemDetails.css';
import biryaani from './../../images/special.jpg';
import {getItemDetails} from "../../store/actions/itemActions";



const item = (props) =>{
    const details = props.info;
    return (
        <Aux>
            <div className="container">
                <img src={details.img} alt="" className="image"/>
                <div className="details">
                    <p className="details-head">{details.title}</p>
                    <p className="name">{details.desc}</p>
                    <p className="name">Non-Veg</p>
                    <p className="price">
                        <del style={{color: "rgb(141, 140, 140)"}}><i className="fa fa-rupee rupee"></i>&nbsp;249</del>
                        &nbsp;&nbsp;<i className="fa fa-rupee rupee"></i>&nbsp;{details.price}
                    </p>
                    <div className="other-details">
                        <div className="block">
                            <button className="rating"><i className='fa fa-star'
                                                          style={{fontSize: "15px"}}></i>&nbsp;&nbsp;4.5
                            </button>
                        </div>
                        <div className="block mobile-hide">
                            <button className="btn" onClick={() => props.click(details)}><i className='fa fa-shopping-cart'
                                                       style={{fontSize: "15px"}}></i>&nbsp;&nbsp;ADD
                            </button>
                        </div>
                        <div className="block">
                            <button className="btn rating"><i className='fa fa-star'
                                                       style={{fontSize: "15px"}}></i>&nbsp;&nbsp;ADD REVIEW
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="add-to-cart-box-mobile">
                <button className="button" style={{fontSize: "20px",fontWeight: "bolder"}} onClick={() => props.click(details)}><i
                    className='fa fa-shopping-cart' style={{fontSize: "25px"}}></i>&nbsp;&nbsp;ADD TO CART
                </button>
            </div>

            <br/><br/>

        </Aux>
    );
}

export default item;
