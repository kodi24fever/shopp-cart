import React, {useEffect} from "react";
import {Consumer} from '../../store/appContext';


//import store
import store from './../../store/store.zustand';


export default function Cards() {
    const products = store(state => state.products);
    const addCart = store(state => state.addCart);

  
    return(
        <div className="grid grid-cols-1 pt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 xl:grid-cols-3 xl:gap-10 xl:mr-40">
            {
            products.map((product) => {
                return (
                    <div className="letter-cards cards rounded-lg overflow-hidden shadow-lg bg-white" key={product.id}>
                        <div className="container bg-slate-400 h-40 flex items-center justify-center">
                            <img className="relative h-48 pt-6" src={product.path}/>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-black text-2xl text-[#081F32]">{product.name}</div>
                            <div>
                                <span className="inline-block py-1 text-sm font-bold text-gray-700 mr-2 mb-2 text-[#000A26]">{product.type}</span>
                            </div>
                            <div>
                                <span className="inline-block py-1 text-sm font-semibold text-sky-700 mr-2 mb-2">{product.needle} NEEDLE</span>
                                <span className="inline-block py-1 text-sm font-semibold text-sky-700 mr-2 mb-2">{product.head.toUpperCase()}</span>
                            </div>
                            <p className="text-[#6E798C] text-base">{product.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                        </div>
                        <div className="flex flex-row pl-6 mt-6 mb-6">
                            <div><span className="px-3 py-1 text-xl font-semibold text-gray-700 text-[#081F32]">${product.deal}</span></div>
                            <div><span className="py-1 text-xl font-semibold text-gray-700 mr-2 mb-2 text-[#F17D21] lined">${product.price}</span></div>
                            <div className=""><button className="bg-[#F17D21] px-3 py-1 text-base font-medium tracking-widest text-white mr-2 mb-2 rounded-lg" onClick={() => addCart(product.id)}>ORDER</button></div>
                        </div>
                    </div>
                )
            })} 
        </div>
    );
         
   
}
