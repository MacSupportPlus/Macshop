import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IamViICdNglLVHccRiVBygpeXkG8B4sXAv9Edwv0auqAK2qmnRvJaUVY3Sj5NaNYPBiOcDDIvbzqrvxjORfi8ke00Paa509aL'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
  return (
    <StripeCheckout 
        label = 'Pay Now'
        name = 'MacShop'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount = {priceForStripe}
        paneLabel= 'Pay Now'
        token = {onToken}
        stripeKey={publishableKey}
    />
      
  
  )
}

export default StripeCheckoutButton
