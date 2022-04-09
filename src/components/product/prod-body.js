import React from "react";

import Cards from './cards.js';

export default class ProdBody extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div className="mobile-header container mx-auto mt-36">
                <div className="text-5xl font-bold">Dui Augue Lectus</div>
                <div className="text-base text-justify mt-9 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo nec ultrices sit risus nisi non fermentum morbi. Tristique.</div>
        
                <Cards />
            </div>
            <div className="move-top-2 hide-el">
                <div className="h-80"></div>
            </div>
        </React.Fragment>

            
        );
    };
}

