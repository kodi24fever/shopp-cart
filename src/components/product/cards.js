import React from "react";
import {Consumer} from './../../store/appContext';

import './../../index.css'

export default class Cards extends React.Component {
    render () {
        return (
            <Consumer>
                {({state, actions}) => {
                    return(
                        <React.Fragment>
                        <div className="cards-lg mobile-cards pr-10 lg:pt-10 grid grid-cols-1 sm:grid-cols-1 sm:p-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 xl:grid-cols-4 xl:gap-10">
                            {
                                state.products.map((product) => {
                                    return (
                                        <div className="cards rounded-lg overflow-hidden shadow-lg bg-white" key={product.id}>
                                            <div className="container bg-slate-400 h-40 flex items-center justify-center">
                                                <img className="relative h-48 pt-6" src={product.path}/>
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl">{product.name}</div>
                                                <div>
                                                    <span className="inline-block py-1 text-sm font-bold text-gray-700 mr-2 mb-2">{product.type}</span>
                                                </div>
                                                <div>
                                                    <span className="inline-block py-1 text-sm font-semibold text-sky-700 mr-2 mb-2">{product.needle} NEEDLE</span>
                                                    <span className="inline-block py-1 text-sm font-semibold text-sky-700 mr-2 mb-2">{product.head.toUpperCase()}</span>
                                                </div>
                                                <p className="text-gray-700 text-base">{product.description}</p>
                                            </div>
                                            <div class="px-6 pt-4 pb-2">
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                                            </div>
                                            <div class="flex flex-row pl-6 mt-6 mb-6">
                                                <span className="px-3 py-1 text-sm font-semibold text-gray-700">${product.deal}</span>
                                                <span className="py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${product.price}</span>
                                                <button className="object-right bg-orange-500 px-3 py-1 text-sm font-semibold text-white ml-1000 mr-2 mb-2" onClick={() => actions.addCart(product.id)}>ORDER</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        
                    </React.Fragment>
                    );
                }}
            </Consumer>
        );
    };
}