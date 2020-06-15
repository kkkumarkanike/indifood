import React, {useEffect} from "react";
import './VegItems.css';
import Aux from './../../hoc/Auxilary';
import special from './../../images/special.jpg';
import biryaani from './../../images/biryaani.jpg';
import {connect} from "react-redux";
import {getItems,addItemToCart} from "../../store/actions/itemActions";

const vegItems = props =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        props.getItems();
        console.log('Use Effect working');
    },[]);

    let items = null;
    let mobileItems = null;
    if (props.foodItems.length > 0){
        items = props.foodItems.map(item =>{
            console.log("Single Item array",item);
            return (
                <div className="filtered-food-card">
                <img src={item.img} alt="image" className="food-image"/>
                    <div className="filtered-details">
                        <p style={{margin: 0}}><b>{item.title}</b><br/>
                            <span className="filtered-desc">{item.desc}</span>
                        </p>
                        <button className="left"><i className="fa fa-rupee"></i>&nbsp;{item.price}
                        </button>
                        <button className="right" onClick={() => {props.onAddItemToCart(item)}}><b>ADD</b></button>
                    </div>
                </div>
            )
        });
        mobileItems = props.foodItems.map(item =>{
            return (
                <div className="mobile-single-item">
                    <img src={item.img} alt="" className="mobi-image"/>
                    <div className="mobi-item-details">
                        <h5 className="mobi-item-head">{item.title}</h5>
                        <p className="mobi-item-para">{item.desc}</p>
                        <div className="rate-add">
                            <div className="rate-flex">
                                <div>
                                    <button className="rate-btn"><i className="fa fa-rupee"></i>&nbsp;{item.price}
                                    </button>
                                </div>
                            </div>
                            <div className="add-flex">
                                <div>
                                    <button className="add-btn" onClick={() => props.onAddItemToCart(item)}>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            )
        });
    }
    return (
        <Aux>
            <div className="container-fluid">
                <div className="desktop">
                    <div className="main-veg-banner">
                        <div><img src={special} alt="banner" className="banner-image"/></div>
                        <div className="item-type-details">
                            <p className="cui item-head">Only Veg</p>
                            <p className="cui-lite item-type"><b>All types of veg items are available here</b></p>
                            <br/><p className="cui-lite item-type"><b>NTR Colony, Yemmiganur</b></p>
                            <div className="accomplishments">
                                <div className="overall-rating">
                                    <p className="font-white"><b><i className="fa fa-star"></i>&nbsp;&nbsp;4.1</b></p>
                                    <p className="font-dim">Rating</p>
                                </div>
                                <div className="vr"></div>
                                <div className="time">
                                    <p className="font-white"><b><i className="fa fa-clock-o"></i>&nbsp;&nbsp;31
                                        mins</b></p>
                                    <p className="font-dim">Delivery Time</p>
                                </div>
                                <div className="vr"></div>
                                <div className="cost">
                                    <p className="font-white"><b><i className="fa fa-rupee"></i>&nbsp;200</b></p>
                                    <p className="font-dim">Cost of one</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <section style={{margin  :0, padding : 0}}>
                        <div className="filters-section">
                            <div className="filter-block">
                                <div className="filters">
                                    <div className="type-flex">
                                        <p><input type="checkbox" name="rice_items"/>
                                            <b><span className="txt hover">Rice Items</span></b></p>
                                    </div>
                                    <div className="type-flex">
                                        <p><input type="checkbox" name="breakfast"/>
                                            <b><span className="txt hover">Breakfast</span></b></p>
                                    </div>
                                    <div className="type-flex">
                                        <p><input type="checkbox" name="curries"/>
                                            <b><span className="txt hover">Curries</span></b></p>
                                    </div>
                                    <div className="type-flex">
                                        <p><input type="checkbox" name="roties"/>
                                            <b><span className="txt hover">Roties</span></b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="vl"></div>
                            <div className="filtered-items-block">
                                <p className="txt">{props.foodItems.length} ITEMS</p>
                                <div className="filtered-items">
                                    {items}
                                    {items}
                                    {/*<div className="filtered-food-card">*/}
                                    {/*    <img src={biryaani} alt="image" className="food-image"/>*/}
                                    {/*        <div className="filtered-details">*/}
                                    {/*            <p style={{margin: 0}}><b>Biryaani</b><br/>*/}
                                    {/*                <span className="filtered-desc">Dham Biryaani</span>*/}
                                    {/*            </p>*/}
                                    {/*            <button className="left"><i className="fa fa-rupee"></i>&nbsp;200*/}
                                    {/*            </button>*/}
                                    {/*            <button className="right"><b>ADD</b></button>*/}
                                    {/*        </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="filtered-food-card">*/}
                                    {/*    <img src={biryaani} alt="image" className="food-image"/>*/}
                                    {/*        <div className="filtered-details">*/}
                                    {/*            <p style={{margin: 0}}><b>Biryaani</b><br/>*/}
                                    {/*                <span className="filtered-desc">Dham Biryaani</span>*/}
                                    {/*            </p>*/}
                                    {/*            <button className="left"><i className="fa fa-rupee"></i>&nbsp;200*/}
                                    {/*            </button>*/}
                                    {/*            <button className="right"><b>ADD</b></button>*/}
                                    {/*        </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="filtered-food-card">*/}
                                    {/*    <img src={biryaani} alt="image" className="food-image"/>*/}
                                    {/*        <div className="filtered-details">*/}
                                    {/*            <p style={{margin: 0}}><b>Biryaani</b><br/>*/}
                                    {/*                <span className="filtered-desc">Dham Biryaani</span>*/}
                                    {/*            </p>*/}
                                    {/*            <button className="left"><i className="fa fa-rupee"></i>&nbsp;200*/}
                                    {/*            </button>*/}
                                    {/*            <button className="right"><b>ADD</b></button>*/}
                                    {/*        </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="filtered-food-card">*/}
                                    {/*    <img src={biryaani} alt="image" className="food-image"/>*/}
                                    {/*        <div className="filtered-details">*/}
                                    {/*            <p style={{margin: 0}}><b>Biryaani</b><br/>*/}
                                    {/*                <span className="filtered-desc">Dham Biryaani</span>*/}
                                    {/*            </p>*/}
                                    {/*            <button className="left"><i className="fa fa-rupee"></i>&nbsp;200*/}
                                    {/*            </button>*/}
                                    {/*            <button className="right"><b>ADD</b></button>*/}
                                    {/*        </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="filtered-food-card">*/}
                                    {/*    <img src={biryaani} alt="image" className="food-image"/>*/}
                                    {/*        <div className="filtered-details">*/}
                                    {/*            <p style={{margin: 0}}><b>Biryaani</b><br/>*/}
                                    {/*                <span className="filtered-desc">Dham Biryaani</span>*/}
                                    {/*            </p>*/}
                                    {/*            <button className="left"><i className="fa fa-rupee"></i>&nbsp;200*/}
                                    {/*            </button>*/}
                                    {/*            <button className="right"><b><i*/}
                                    {/*                className="fa fa-cart-plus"></i>&nbsp;ADD</b></button>*/}
                                    {/*        </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="filtered-food-card">*/}
                                    {/*    <img src={biryaani} alt="image" className="food-image"/>*/}
                                    {/*        <div className="filtered-details">*/}
                                    {/*            <p style={{margin: 0}}><b>Biryaani</b><br/>*/}
                                    {/*                <span className="filtered-desc">Dham Biryaani</span>*/}
                                    {/*            </p>*/}
                                    {/*            <button className="left"><i className="fa fa-rupee"></i>&nbsp;200*/}
                                    {/*            </button>*/}
                                    {/*            <button className="right"><b>ADD</b></button>*/}
                                    {/*        </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


            <div className="mobile">
                <div className="mobile-banner">
                    <p className="mobile-banner-head">Only Veg</p>
                    <p className="mobile-banner-sub">All types of veg items are available here</p>
                    <div className="hr-lite"></div>
                    <div className="mobile-banner-details">
                        <div className="each each-rate">
                            <div>
                                <p className="mobi-rate"><b><i className="fa fa-star"></i>&nbsp;4.1</b></p>
                                <p className="font-dim">Overall rating</p>
                            </div>
                        </div>
                        <div className="each each-clock">
                            <div>
                                <p className="mobi-rate"><b><i className="fa fa-clock-o"></i>&nbsp;33 mins</b></p>
                                <p className="font-dim">Delivery Time</p>
                            </div>
                        </div>
                        <div className="each each-price">
                            <div>
                                <p className="mobi-rate"><b><i className="fa fa-rupee"></i>&nbsp;200</b></p>
                                <p className="font-dim">Cost of one</p>
                            </div>
                        </div>
                    </div>
                    <div className="hr-lite"></div>
                    <p className="font-dim mar">{props.foodItems.length ? props.foodItems.length : "no"} items found</p>
                    <div className="mobile-items">
                        {mobileItems}
                        {mobileItems}
                        {/*<div className="mobile-single-item">*/}
                        {/*    <img src={biryaani} alt="" className="mobi-image"/>*/}
                        {/*        <div className="mobi-item-details">*/}
                        {/*            <h5 className="mobi-item-head">Biryaani</h5>*/}
                        {/*            <p className="mobi-item-para">Dham Biryaani</p>*/}
                        {/*            <div className="rate-add">*/}
                        {/*                <div className="rate-flex">*/}
                        {/*                    <div>*/}
                        {/*                        <button className="rate-btn"><i className="fa fa-rupee"></i>&nbsp;200*/}
                        {/*                        </button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="add-flex">*/}
                        {/*                    <div>*/}
                        {/*                        <button className="add-btn">ADD</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*</div>*/}
                        {/*<div className="mobile-single-item">*/}
                        {/*    <img src={biryaani} alt="" className="mobi-image"/>*/}
                        {/*    <div className="mobi-item-details">*/}
                        {/*        <h5 className="mobi-item-head">Biryaani</h5>*/}
                        {/*        <p className="mobi-item-para">Dham Biryaani</p>*/}
                        {/*        <div className="rate-add">*/}
                        {/*            <div className="rate-flex">*/}
                        {/*                <div>*/}
                        {/*                    <button className="rate-btn"><i className="fa fa-rupee"></i>&nbsp;200*/}
                        {/*                    </button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="add-flex">*/}
                        {/*                <div>*/}
                        {/*                    <button className="add-btn">ADD</button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="mobile-single-item">*/}
                        {/*    <img src={biryaani} alt="" className="mobi-image"/>*/}
                        {/*        <div className="mobi-item-details">*/}
                        {/*            <h5 className="mobi-item-head">Biryaani</h5>*/}
                        {/*            <p className="mobi-item-para">Dham Biryaani</p>*/}
                        {/*            <div className="rate-add">*/}
                        {/*                <div className="rate-flex">*/}
                        {/*                    <div>*/}
                        {/*                        <button className="rate-btn"><i className="fa fa-rupee"></i>&nbsp;200*/}
                        {/*                        </button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="add-flex">*/}
                        {/*                    <div>*/}
                        {/*                        <button className="add-btn">ADD</button>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </Aux>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        foodItems: state.item.res,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(getItems()),
        onAddItemToCart: (item) => dispatch(addItemToCart(item))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(vegItems);