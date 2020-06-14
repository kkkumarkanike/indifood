import React from "react";
import Aux from './../../hoc/Auxilary';
import bir from './../../images/bir.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Orders.css';
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";

const orders = props =>{
    return (
        <Aux>
            <h2 className="orders-head"><FontAwesomeIcon icon={faBoxOpen} style={{fontSize : "20px"}}/>&nbsp;Your Orders</h2>
            <br/><br/>

            <div className="orders">
                <div className="orders-container">
                    <div className="order-card">
                        <div>
                            <img src={bir} alt="Biryaani" className="order-image"/>

                        </div>
                        <div className="order-details">
                            <h3>Hyderbad Dham Biryaani</h3>
                            <p className="name">Non-Veg</p>
                            <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;200</p>
                        </div>
                    </div>

                </div>
                <div className="order-hr"></div>
            </div>
            <div className="orders">
                <div className="orders-container">
                    <div className="order-card">
                        <div>
                            <img src={bir} alt="Biryaani" className="order-image"/>

                        </div>
                        <div className="order-details">
                            <h3>Hyderbad Dham Biryaani</h3>
                            <p className="name">Non-Veg</p>
                            <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;200</p>
                        </div>
                    </div>

                </div>
                <div className="order-hr"></div>
            </div>
            <div className="orders">
                <div className="orders-container">
                    <div className="order-card">
                        <div>
                            <img src={bir} alt="Biryaani" className="order-image"/>

                        </div>
                        <div className="order-details">
                            <h3>Hyderbad Dham Biryaani</h3>
                            <p className="name">Non-Veg</p>
                            <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;200</p>
                        </div>
                    </div>

                </div>
                <div className="order-hr"></div>
            </div>
        </Aux>
    );
}

export default orders;