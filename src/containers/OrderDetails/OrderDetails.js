import React, { useState, useEffect } from "react";
import "./OrderDetails.css";
import img from "../../images/bir.jpg";
import back from "../../images/img2.jpg";
import { withRouter } from "react-router-dom";
import Spinner from "../../component/UI/Spinner/Spinner";
import axios from "axios";
import { connect } from "react-redux";
import { getOrderedDetails } from "./../../store/actions/itemActions";

const OrderDetails = (props) => {
  useEffect(() => {
    props.onGetOrderedDetails(props.match.params.id);
  }, []);
  let orders = null;
  let vol = null;
  let total = null;
  let address = null;
  if (props.orderedDetails.orderedItems) {
    const otherDetails = props.orderedDetails;
    const ad = otherDetails.address;
    const allOrders = props.orderedDetails.orderedItems;
    orders = allOrders.map((each) => {
      return (
        <div className="details-checkout">
          <div className="details-checkout-container">
            <div className="details-checkout-card">
              <div>
                <img
                  src={each.img}
                  alt="item"
                  className="details-checkout-image"
                />
              </div>
              <div className="checkout-details">
                <h5>{each.title}</h5>
                <p className="name">{each.category}</p>
                <p className="price">
                  <i className="fa fa-rupee rupee"></i>&nbsp;{each.price}
                </p>
              </div>
            </div>
          </div>
          <div className="hr"></div>
        </div>
      );
    });
    vol = allOrders.map((each) => {
      return (
        <div className="each-item">
          vol {each.count} -&nbsp;
          <i className="fa fa-rupee" style={{ paddingTop: "5px" }}></i>
          &nbsp;{each.price}
        </div>
      );
    });
    total = (
      <div className="total-details" >
        <div className="total">
          <div className="each-item" style={{ marginTop: "0.5rem" }}>
            <span style={{ color: "#aaa" }}>Total Price</span>
            &nbsp;&nbsp;:&nbsp;&nbsp;
            <i className="fa fa-rupee" style={{ paddingTop: "5px" }}></i>
            <b>{otherDetails.amount}</b>
          </div>
        </div>
      </div>
    );
    address = (
      <div>
        <p className="address">{ad.billing_name},</p>
        <p className="address">{ad.billing_address_line1},</p>
        <p className="address">{ad.billing_address_city},</p>
        <p className="address">
          {ad.billing_address_country} - {ad.billing_address_zip}.
        </p>
      </div>
    );
  }
  return (
    <div className="each-full-order-details">
      <div className="details-back"></div>
      <div className="all-orders-card">
        <div className="orders">
        {orders}
        </div>
        <div className="orders">
        {vol}
        {total}
        </div>
        <div className="orders">
        <div className="order-total">
          <h5 style={{ margin: "5px 0" }}>Address</h5>
          {address}
        </div>
        </div>
        
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    orderedDetails: state.item.eachOrderDetails,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetOrderedDetails: (id) => dispatch(getOrderedDetails(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderDetails));
