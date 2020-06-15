import React, {useEffect} from "react";
import Aux from './../../hoc/Auxilary';
import './Cart.css';
import bir from './../../images/bir.jpg';
import {connect}from "react-redux";
import {getCartItems} from './../../store/actions/itemActions';
const cart = props =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        props.onGetCartItems();
        console.log("Cart Items List",props.cartItems);
    },[]);
    let cart = 'Your cart is Empty';
    if (props.cartItems.length){
        cart = props.cartItems.map(item =>{
            return (
                <div className="checkout">
                <div className="checkout-container">
                    <div className="checkout-card">
                        <div>
                            <img src={item.img} alt="Biryaani" className="checkout-image"/>
                        </div>
                        <div className="checkout-details">
                            <h3>{item.title}</h3>
                            <p className="name">{item.category}</p>
                            <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;{item.price}</p>
                        </div>
                    </div>
                    <div className="items">
                        <div className="checkout-items">
                            <button className="bt inc"><i className="fa fa-plus"></i></button>
                            <button className="bt number">11</button>
                            <button className="bt dec"><i className="fa fa-minus"></i></button>
                        </div>
                        <div>
                            <button className="delete"><i className="fa fa-trash" style={{fontSize: "15px"}}></i></button>
                        </div>
                    </div>
                </div>
                <div className="hr-cart"></div>
            </div>
            );
        })
    }
    return (
        <Aux>
            <h2 className="checkout-head"><i className="fa fa-shopping-cart"></i>&nbsp;Cart</h2>
            <br/><br/>
            {props.cartItems.length  ? cart : <p style={{textAlign : "center"}}>your Cart is Empty</p>}
            {/*<div className="checkout">*/}
            {/*    <div className="checkout-container">*/}
            {/*        {props.cartItems.length  ? cart : <p style={{textAlign : "center"}}>your Cart is Empty</p>}*/}
            {/*        <div className="checkout-card">*/}
            {/*            <div>*/}
            {/*                <img src={bir} alt="Biryaani" className="checkout-image"/>*/}
            {/*            </div>*/}
            {/*            <div className="checkout-details">*/}
            {/*                <h3>Hyderbad Dham Biryaani</h3>*/}
            {/*                <p className="name">Non-Veg</p>*/}
            {/*                <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;200</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="items">*/}
            {/*            <div className="checkout-items">*/}
            {/*                <button className="bt inc"><i className="fa fa-plus"></i></button>*/}
            {/*                <button className="bt number">11</button>*/}
            {/*                <button className="bt dec"><i className="fa fa-minus"></i></button>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <button className="delete"><i className="fa fa-trash" style={{fontSize: "15px"}}></i></button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="hr-cart"></div>*/}
            {/*</div>*/}
            {/*<div className="checkout">*/}
            {/*    <div className="checkout-container">*/}
            {/*        <div className="checkout-card">*/}
            {/*            <div>*/}
            {/*                <img src={bir} alt="Biryaani" className="checkout-image"/>*/}

            {/*            </div>*/}
            {/*            <div className="checkout-details">*/}
            {/*                <h3>Hyderbad Dham Biryaani</h3>*/}
            {/*                <p className="name">Non-Veg</p>*/}
            {/*                <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;200</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="items">*/}
            {/*            <div className="checkout-items">*/}
            {/*                <button className="bt inc"><i className="fa fa-plus"></i></button>*/}
            {/*                <button className="bt number">11</button>*/}
            {/*                <button className="bt dec"><i className="fa fa-minus"></i></button>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <button className="delete"><i className="fa fa-trash" style={{fontSize: "15px"}}></i></button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="hr-cart"></div>*/}
            {/*</div>*/}
            {props.cartItems.length ?
                <div className="checkout-container">
                    <div className="checkout-button">
                        <button className="button" onClick="openOrder()" style={{fontSize: "15px",fontWeight: "bolder"}}><i
                            className='fa fa-cart-plus' style={{fontSize: "25px"}}></i>&nbsp;&nbsp;CHECKOUT
                        </button>
                    </div>
                </div>
                :
                null
            }
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        cartItems : state.item.cart
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onGetCartItems : () => dispatch(getCartItems())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cart);