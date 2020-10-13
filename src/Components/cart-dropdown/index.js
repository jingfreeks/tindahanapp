import React from 'react';
import './styles.scss';

import CustomeButton from '../custom-button';

const CartDropdown=()=>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-item' />
            <CustomeButton>GO TO CHECKOUT</CustomeButton>
        </div>
    )
}

export default CartDropdown;