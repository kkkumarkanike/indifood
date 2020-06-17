import React, {useEffect} from "react";
import Aux from './../../hoc/Auxilary';
import './Cart.css';
import bir from './../../images/bir.jpg';
import {connect}from "react-redux";
import PayButton from './../Stripe/Stripe';
import {getCartItems,incrementCount,decrementCount,updateStateCart,deleteItemFromCart} from './../../store/actions/itemActions';


// const stripePromise = loadStripe('pk_test_51GrK91AcP3XN5kttwg2Uo17UmF8QCuCy4Okb59kVtd59ncFPTTQ5kCaCb0p3NHvfEUHr0D6tmUrvJnajwhHU2CxB00Lx6RdcLM');

const cart = props =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        props.onGetCartItems();
        console.log("Cart Items List",props.cartItems);
    },[]);
    const incCount = (id,count) =>{
         props.onIncCount(id,count);
        // props.onGetCartItems();
        props.onUpdateStateCart(id,count + 1);
    }
    const decCount = (id,count) =>{
        props.onDecCount(id,count);
        // props.onGetCartItems();
        props.onUpdateStateCart(id,count-1);
    }

    const closeOrder = () =>{
        document.querySelector('.backdrop').classList.add('hide');
        document.querySelector('.order').classList.add('hide');
    }
    const openOrder = () =>{
        document.querySelector('.backdrop').classList.remove('hide');
        document.querySelector('.order').classList.remove('hide');
    }
    const deleteFromCart = (id,items) =>{
        props.onDeleteCartItem(id,items);
    }

    let cart = 'Your cart is Empty';
    let orderList = null;
    let totalDetails = null;
    let total = 0;
    let list = Object.keys(props.cartItems);
    console.log('THis is the List',list);
    if (list.length){
        console.log("I am Entering into the Iteration");
        const Items = props.cartItems;
        const cartItemIds = Object.keys(Items);

        cart = cartItemIds.map(item =>{
            console.log("These are the ids",Items[item].img);
            return (
                <div className="checkout">
                <div className="checkout-container">
                    <div className="checkout-card">
                        <div>
                            <img src={Items[item].img} alt="Biryaani" className="checkout-image"/>
                        </div>
                        <div className="checkout-details">
                            <h3>{Items[item].title}</h3>
                            <p className="name">{Items[item].category}</p>
                            <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;{Items[item].price}</p>
                        </div>
                    </div>
                    <div className="items">
                        <div className="checkout-items">
                            <button className="bt inc" onClick={() => incCount(item,Items[item].count)}><i className="fa fa-plus"></i></button>
                            <button className="bt number">{Items[item].count}</button>
                            <button className="bt dec" onClick={() => decCount(item,Items[item].count)}><i className="fa fa-minus"></i></button>
                        </div>
                        <div>
                            <button className="delete" onClick={() => deleteFromCart(item,Items)}><i className="fa fa-trash" style={{fontSize: "15px"}}></i></button>
                        </div>
                    </div>
                </div>
                <div className="hr-cart"></div>
            </div>
            );

        });
        orderList = cartItemIds.map(item => {
            return (
                <div className="checkout">
                    <div className="checkout-container">
                        <div className="checkout-card">
                            <div>
                                <img src={Items[item].img} alt="item" className="checkout-image"/>

                            </div>
                            <div className="checkout-details">
                                <h5>{Items[item].title}</h5>
                                <p className="name">{Items[item].category}</p>
                                <p className="price"><i className="fa fa-rupee rupee"></i>&nbsp;{Items[item].price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hrl"></div>
                </div>
            );
        });
        totalDetails = cartItemIds.map(item =>{
            total = total + (parseInt(Items[item].count) * parseInt(Items[item].price));
            return(
                        <div className="each-item">vol {Items[item].count} -&nbsp;<i className="fa fa-rupee" style={{paddingTop: "5px"}}></i>&nbsp;{parseInt(Items[item].count) * parseInt(Items[item].price)}
                        </div>
            );
        });
    }
    return (
        <Aux>
            <h2 className="checkout-head"><i className="fa fa-shopping-cart"></i>&nbsp;Cart</h2>
            <br/><br/>
            {Object.keys(props.cartItems).length  ? cart : <p style={{textAlign : "center"}}>your Cart is Empty</p>}
            {Object.keys(props.cartItems).length ?
                <div className="checkout-container">
                    <div className="checkout-button">
                        <button className="button" onClick={() => openOrder()} style={{fontSize: "15px",fontWeight: "bolder"}}><i
                            className='fa fa-cart-plus' style={{fontSize: "25px"}}></i>&nbsp;&nbsp;CHECKOUT
                        </button>
                    </div>
                </div>
                :
                null
            }
            <div className="backdrop hide" onClick={() => closeOrder()}></div>
            <div className="order hide">
                <div className="cancel" onClick={() => closeOrder()}><i className="fa fa-times"></i></div>
                {orderList}
                <div className="total-details">
                    <div className="total">
                        {totalDetails}
                    </div>

                </div>
                <div className="total-details">
                    <div className="total">
                        <div className="each-item"><span style={{color: "#aaa"}}>Total Price</span>&nbsp;&nbsp;:&nbsp;&nbsp;<i
                            className="fa fa-rupee" style={{paddingTop: "5px"}}></i><b>{total}</b></div>
                    </div>
                </div>
                <div className="checkout-container">
                    <div className="checkout-button">
                        <PayButton amount={total} style={{width:"100%"}}/>
                        {/*<button className="button" style={{fontSize: "15px",fontWeight: "bolder"}}>PLACE ORDER</button>*/}
                    </div>
                </div>

            </div>
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
        onGetCartItems : () => dispatch(getCartItems()),
        onIncCount : (id,count) => dispatch(incrementCount(id,count)),
        onDecCount : (id,count) => dispatch(decrementCount(id,count)),
        onUpdateStateCart : (id,count) => dispatch(updateStateCart(id,count)),
        onDeleteCartItem : (id,items) => dispatch(deleteItemFromCart(id,items))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cart);