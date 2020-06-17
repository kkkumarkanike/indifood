import React from "react";
import StripeCheckout from "react-stripe-checkout";
import './Stripe.css';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {emptyCart} from "../../store/actions/itemActions";



const testStripe = props =>{
    console.log("Stripe Props",props);
    const key = 'pk_test_51GrK91AcP3XN5kttwg2Uo17UmF8QCuCy4Okb59kVtd59ncFPTTQ5kCaCb0p3NHvfEUHr0D6tmUrvJnajwhHU2CxB00Lx6RdcLM';
    const onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                console.log('Response',data);
                alert(`We are in business, ${data.email}`);
            });
        });
    }
    const close= () =>{
        console.log("Payment success");
        props.onEmptyCart();
        props.history.replace('/orders');
    }

    return(
        <div>
            <StripeCheckout
                ComponentClass="stripe-button-el"
                token={onToken}
                stripeKey={key}
                amount={props.amount*100} // cents
                currency="INR"
                billingAddress={true}
                zipCode={true}
                closed={close}
            />

        </div>
    );
}
const mapStateToProps = state =>{
    return {

    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onEmptyCart : () => dispatch(emptyCart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(testStripe));