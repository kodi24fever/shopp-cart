import React, { useState } from 'react';
import {Consumer} from './../../store/appContext'
import './../../index.css';

export default class Cart extends React.Component {
    constructor(){
        super();
        this.state={
            show: true
        };
        this.showHide = this.showHide.bind(this);    
    }

    showHide(){
        if (!this.state.show){
            this.setState({
                show: true
            });
        } else this.setState({
            show: false
        });
    }

    render() {

        if (this.state.show) {
            return (
                <Consumer>
                    {({state, actions}) => {
                        return(
                            <div className="container lg:ml-[58%] xl:ml-[63%] lg:w-96 max-h-[500px] overflow-x-hidden">
                                <div className="md:ml-auto lg:ml-auto mt-2 md:mt-9 lg:mt-5 lg:w-96 md:w-96 max-h-screen md:max-h-screen lg:max-h-[550px] overflow-y-scroll ">
                                    <div className="flex shadow-lg">
                                        <div className="w-full bg-white px-10 py-10">
                                            <div className="flex justify-between border-b pb-8">
                                                <h1 class="font-semibold text-2xl">Your Cart</h1>
                                                <button onClick={this.showHide}><h2 class="font-semibold text-2xl">X</h2></button>
                                            </div>
                                            {
                                                state.cart.map((product, index) => {
                                                    return (
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
                                                                        <button className="w-6 h-6 rounded-full bg-gray-200" onClick={() => actions.handleDecrement(index)}>
                                                                            <svg className="fill-current text-[#6E70FF] w-3 mx-auto" viewBox="0 0 448 512">
                                                                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                                                        </svg>
                                                                        </button>
        
                                                                        <input className="border-none mx-2 border text-center w-8" type="text" value={product.startingCount}/>
        
                                                                        <button className="w-6 h-6 rounded-full bg-gray-200" onClick={() => actions.handleSum(index)}>
                                                                            <svg className="fill-current text-[#6E70FF] w-3 mx-auto" viewBox="0 0 448 512">
                                                                            <path className="" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                                                                        </svg></button>
                                                                    </div>
                                                                </div>   
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                            <div class="flex justify-between">
                                                <h1 className="font-semibold text-2xl">Order Total</h1>
                                                <h2 className="font-semibold text-2xl">${state.total}</h2>
                                            </div>
        
                                            <div className="flex justify-center">
                                                <button className="rounded-lg bg-[#0076FF] font-semibold hover:bg-indigo-600 py-3 mt-8 text-sm text-white uppercase w-48" onClick={() => alert("You have Bought $"+ state.total + " a confimration will be sent to your email. Thanks!!")}>Checkout</button>
                                            </div>
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </Consumer>
            );

        } else return null;


        
    };
    
}