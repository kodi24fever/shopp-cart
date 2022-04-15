import React from "react";

import Cards from './cards.js';

export default class ProdBody extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="letter-cards mobile-header container mx-auto mt-8 md:mt-0 lg:mt-0 px-4 md:px-14">
                <div className="text-6xl text-[#002045] font-black">Dui Augue Lectus</div>
                <div className="text-2xl text-[#002045] text-justify mt-9 font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo <br className="hide-el"></br> nec ultrices sit risus nisi non fermentum morbi. Tristique.</div>
        
                <Cards />
            </div>
            <div className="move-top-2 hide-el">
                <div className="h-80"></div>
            </div>
        </React.Fragment>

            
        );
    };
}

