import React, {useState} from 'react';

//import store
import store from '../../store/store.zustand';

export default function DisplayTotalInCart() {

    const totalInCart = store().totalInCart;

    if(totalInCart >= 1){
        return <div className="w-7 h-7 bg-[#0076FF] rounded-full cart-notification">{totalInCart}</div>
    }else return <div className="w-7 h-7 bg-[#0076FF] rounded-full cart-notification cart-notification-hidden"></div>
}