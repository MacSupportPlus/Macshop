# Macshop
# mac-shop

## Introduction

This is a sample full-ecommerce shop that uses React/Redux , with firebase for login and registration, and also a heroku deployment.  The app allows you to virtual checkout which is the most important step with react-stripe , and also uses the following redux libraries : react dom , react-redux, redux logger, redux persist (for the cart to save) and also reselect.

## Code Samples

This is the cart selection file in the cart redux folder , where we choose the state of the cart that we would like to alter so we dont have to cycle through to find certain state for the cart on the main component page. Limiting the clutteredness that can come with a major component of the cart object. and also keeping our code very precise and neat. 

import {createSelector} from 'reselect';

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (acc, cartItem) => 
        acc + cartItem.quantity, 
  0
  )
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems=> 
    cartItems.reduce(
        (acc, cartItem) => 
        acc + cartItem.quantity * cartItem.price , 
        0
    )
    
)

## Installation

To see this app go to its deployed page on heroku.
https://mac-shop.herokuapp.com/