import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './Stripe.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { cleanCart } from '../../store/actions/itemActions';
import logo from './../../images/logo.png';
import keys from '../../keys';

const Checkout = (props) => {
  const key = keys.stripeKey;

  const CURRENCY = 'INR';

  const inRupees = props.amount * 100;

  const successPayment = (data) => {
    alert('Payment Successful');
  };

  const errorPayment = (data) => {
    alert('Payment Error');
  };

  const onToken = (amount, description) => (token, billingAddress) => {
    axios
      .post('https://indifood-8870f.firebaseio.com/orders.json', {
        description: description,
        source: token.id,
        currency: CURRENCY,
        amount: props.amount,
        email: localStorage.getItem('email'),
        orderedItems: props.items,
        address: billingAddress,
      })
      .then((res) => {
        props.onEmptyCart(props.ids);
        props.history.replace('/orders');
        successPayment(res.data);
      })
      .catch(errorPayment);
  };
  return (
    <StripeCheckout
      amount={inRupees}
      token={onToken(inRupees, 'Hi')}
      currency={CURRENCY}
      stripeKey={key}
      image={logo}
      billingAddress
      zipCode={true}
    />
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onEmptyCart: (ids) => dispatch(cleanCart(ids)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Checkout));
