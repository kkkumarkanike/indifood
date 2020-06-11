import React from "react";
import StripeCheckout from "react-stripe-checkout";
import './Stripe.css';

const testStripe = props =>{
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
    return(
        <div>
            <StripeCheckout
                ComponentClass="stripe-button-el"
                token={onToken}
                stripeKey={key}
                amount={1000000} // cents
                currency="USD"
                billingAddress={true}
                zipCode={true}
            />

        </div>
    );
}


export default testStripe;