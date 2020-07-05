import React,{useEffect} from "react";
import Aux from './../../hoc/Auxilary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Orders.css';
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {getOrders} from "./../../store/actions/itemActions";
import Spinner from './../../component/UI/Spinner/Spinner';


const orders = props =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        props.onGetOrders();
    }, []);


    let items = <Spinner/>;
    const orders = props.orders;
    const orderIds = Object.keys(orders);
    if (orderIds.length > 0){
        items = orderIds.map(id =>{
            const userOrders = orders[id].orderedItems;
            
            return (
                <div className="single-order" key={id}>
                    {userOrders.map(each =>{
                        return (
                            <div className="orders" key={each.img}>
                                <div className="orders-container">
                                    <div className="order-card">
                                        <div>
                                            <img src={each.img} alt="image" className="order-image"/>

                                        </div>
                                        <div className="order-details">
                                            <h3>{each.title[0].toUpperCase() + each.title.slice(1)}</h3>
                                            <p className="name">{each.category}</p>
                                            <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;{each.price}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="order-hr"></div>
                            </div>
                        );
                    })}
                </div>
            )
        })
    }
    return (
        <Aux>
            <h2 className="orders-head"><FontAwesomeIcon icon={faBoxOpen} style={{fontSize : "20px"}}/>&nbsp;Your Orders</h2>
            <br/><br/>

                {orderIds.length ?
                    items
                    :
                    <p style={{textAlign : "center"}}>You have no Orders yet!!</p>
                }

        </Aux>
    );
}
const mapStateToProps = state =>{
    return {
        orders : state.item.orders
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onGetOrders : () => dispatch(getOrders())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(orders);