import React from "react";

//import components
import Navbar from "../navbar/navbar";
import ProdBody from './prod-body';
import Footer from './../footer/footer';

export default function Products() {
    return (
        <React.Fragment>
            <Navbar/>
            <ProdBody />
            <Footer />
        </React.Fragment>
    );
}