import React, { useState, useEffect } from 'react';
import {Consumer} from '../../store/appContext';

import CartItem from './cart.item';


//import hooks
import ShowHide from '../../hooks/showHide';

//import store
import store from '../../store/store.zustand';

export default function Cart() {
    const [show, toggleHide] = ShowHide();

    const total = store().total;

    if(!show){
        return(
            <div className="container lg:ml-[58%] xl:ml-[63%] lg:w-96 max-h-[500px]">
                <div className="md:ml-auto lg:ml-auto mt-2 md:mt-9 lg:mt-5 lg:w-96 md:w-96 max-h-screen md:max-h-screen lg:max-h-[550px] overflow-x-hidden overflow-y-scroll ">
                    <div className="flex shadow-lg">
                        <div className="w-full bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Your Cart</h1>
                                <button onClick={toggleHide}><h2 className="font-semibold text-2xl">X</h2></button>
                            </div>
                            
                            <CartItem />

                            <div class="flex justify-between">
                                <h1 className="font-semibold text-2xl">Order Total</h1>
                                <h2 className="font-semibold text-2xl">${total}</h2>
                            </div>

                            <div className="flex justify-center">
                                <button className="rounded-lg bg-[#0076FF] font-semibold hover:bg-indigo-600 py-3 mt-8 text-sm text-white uppercase w-48" onClick={() => alert("You have Bought $"+ total + " a confimration will be sent to your email. Thanks!!")}>Checkout</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}