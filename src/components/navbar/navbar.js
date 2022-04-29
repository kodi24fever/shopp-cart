import React, {useState} from 'react';
import Logo from './../../assets/Ricoma-Logo.png';
import CartLogo from './../../assets/Cart.png';
import Cart from '../cart/cart';
import Vector from './../../assets/Vector.png';
import {Consumer} from '../../store/appContext';


import {Link} from "react-router-dom";

//import hooks
import ShowHide from '../../hooks/showHide';
import DisplayTotalInCart from './navbar.displayTotalInCart';


export default function Navbar() {

    const [links] = useState(['home', 'products', 'about']);
    const [show, toggleHide] = ShowHide();

        return (
            <div id="nav" className="fixed">
                <div className="mobile-nav container mx-auto px-4 md:px-14">
                    <div className="flex flex-row justify-between">
                        <Link to="/"><div className="basis-1/4 pt-5"><img src={Logo}/></div></Link>
                        <div className="basis-1/2 pt-5 hide-el">
                            <div className="flex justify-center gap-10 flex-nowrap letter-nav">
                                {
                                links.map((link, index) => <div key={index} className="text-white hover:text-[#F17D21] hover:cursor-pointer"><Link to={"/"+link}>{link.toUpperCase()}</Link></div>)
                                }
                            </div>
                        </div>
                        <div className="basis-1/3 lg:basis-1/4">
                            <div className="grid justify-items-end text-white">
                            <button className="cart-button" onClick={toggleHide}>
                                <DisplayTotalInCart/>
                                <img src={CartLogo}/>
                                </button>
                            </div>
                        </div>
                        <div className="basis-1/7 pt-5 hide-vi show-el">
                            <button><img src={Vector}/></button>
                        </div>
                    </div>
                    
                </div>
                {show ? <Cart/>: null}
            </div> 
        );
}