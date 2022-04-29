import React from "react";

//import components
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import store from "./../../store/store.zustand";


//import store

export default function Home() {

    const bears = store(state => state.products);

    return (
        <React.Fragment>
        <Navbar />
            <div>This is Home Page</div>
        <Footer />
        </React.Fragment>
    );
}