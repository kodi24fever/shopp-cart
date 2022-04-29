import React from "react";

//import store
import store from "../../store/store.zustand";


export default function CartItem() {

    //doign this method to render cart every time is updated
    const cart = store().cart;

    const handleSum = store(state => state.handleSum);
    const handleDecrement = store(state => state.handleDecrement);

    return (
        cart.map((product, index) => {
            return(
                <div className="flex flex-row hover:bg-gray-100 -mx-8 px-6 py-5" key={index}>
                    <div className="flex w-full border-b pb-5"> 
                        <div className="w-20">
                            <img className="h-24" src={product.path}/>
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                            <div className="flex flex-row justify-between">
                                <span className="font-bold text-sm">{product.name}</span>
                                <span className="text-right w-1/5 font-semibold text-sm">${product.cartPrice}</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs">{product.type}</span>
                                <span className="text-xs">{product.needle} NEEDLE | {product.head}</span>
                            </div>

                            <div className="flex justify-left">
                                <button className="w-6 h-6 rounded-full bg-gray-200" onClick={() => handleDecrement(index)}>
                                    <svg className="fill-current text-[#6E70FF] w-3 mx-auto" viewBox="0 0 448 512">
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg>
                                </button>

                                <input className="border-none mx-2 border text-center w-8" type="text" value={product.startingCount}/>

                                <button className="w-6 h-6 rounded-full bg-gray-200" onClick={() => handleSum(index)}>
                                    <svg className="fill-current text-[#6E70FF] w-3 mx-auto" viewBox="0 0 448 512">
                                    <path className="" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                </svg></button>
                            </div>
                        </div>   
                    </div>
                </div>
            )
        })
    )
}