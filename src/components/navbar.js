import React from 'react';
import './../index.css';
import Logo from './../assets/Ricoma-Logo.png';
import CartLogo from './../assets/Cart.png';
import Cart from './product/cart';
import Vector from './../assets/Vector.png';
import {Consumer} from './../store/appContext';

export default class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
            show: false,
            links:['home', 'porducts', 'about']
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
        return (
            <div id="nav" className="fixed">
                <div className="mobile-nav container mx-auto px-4 md:px-14">
                    <div className="flex flex-row justify-between">
                        <div className="basis-1/4 pt-5"><img src={Logo}/></div>
                        <div className="basis-1/2 pt-5 hide-el">
                            <div className="flex justify-center gap-10 flex-nowrap letter-nav">
                                {
                                    this.state.links.map((link, index) => <div key={index} className="text-white hover:text-[#F17D21] hover:cursor-pointer">{link.toUpperCase()}</div>)
                                }
                            </div>
                        </div>
                        <div className="basis-1/3 lg:basis-1/4">
                            <div className="grid justify-items-end text-white">
                            <button className="cart-button" onClick={this.showHide}>
                                <Consumer>
                                    {/*SHOWS HIDES CART NOTIFICATION WHEN USER ADDS NEW ITEMS*/}
                                    {({state}) => {
                                        if(state.totalInCart >= 1){
                                            return <div className="w-7 h-7 bg-[#0076FF] rounded-full cart-notification">{state.totalInCart}</div>
                                        }else return <div className="w-7 h-7 bg-[#0076FF] rounded-full cart-notification cart-notification-hidden"></div>
                                    }}
                                </Consumer>
                                
                                <img src={CartLogo}/>
                                </button>
                            </div>
                        </div>
                        <div className="basis-1/7 pt-5 hide-vi show-el">
                            <button><img src={Vector}/></button>
                        </div>
                    </div>
                    
                </div>
                {this.state.show ? <Cart /> : null}
            </div> 
        );
    }
}