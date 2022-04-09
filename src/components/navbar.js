import React from 'react';
import './../index.css';
import Logo from './../assets/Ricoma-Logo.png';
import CartLogo from './../assets/Cart.png';
import Oval from './../assets/Oval.png';
import Cart from './product/cart';
import Vector from './../assets/Vector.png';

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
            <div id="nav">
                <div className="mobile-nav container mx-auto">
                    <div className="flex flex-row justify-between">
                        <div className="basis-1/4 pt-5"><img src={Logo}/></div>
                        <div className="basis-1/2 pt-5 hide-el">
                            <div className="flex justify-center gap-10 flex-nowrap letter-nav">
                                {
                                    this.state.links.map((link, index) => <div key={index} className="text-white">{link.toUpperCase()}</div>)
                                }
                            </div>
                        </div>
                        <div className="basis-1/3 lg:basis-1/4 pt-5">
                            <div className="grid justify-items-end">
                                <button onClick={this.showHide}><img src={CartLogo}/>
                                </button>
                            </div>
                        </div>
                        <div className="basis-1/7 pt-5 hide-vi show-el"><button><img src={Vector}/></button></div>
                    </div>
                </div>
                {this.state.show ? <Cart /> : null}
            </div> 
        );
    }
}