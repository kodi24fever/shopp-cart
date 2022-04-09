import React, { useState } from 'react';
import './../index.css';
import Logo from './../assets/Big-Logo.png';
import Face from './../assets/Face-Icon.png';
import Twitter from './../assets/Twitter-Icon.png';
import Instagram from './../assets/Instagram-Icon.png';
import Youtube from './../assets/Youtube-Icon.png';
import Pinterest from './../assets/Pinterest-Icon.png';
import Video from './../assets/Footer-Video.png';


export default class Footer extends React.Component {
    render() {
        return(
            <div className="letter-cards move-top flex flex-col ">
                <div className="mb-auto h-96 bg-[#022B5B] pt-8 md:pt-20 lg:pt-20 footer-wrap">
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 sm:p-1 md:grid-cols-5 lg:grid-cols-5 md:gap-5 xl:grid-cols-5 xl:gap-10">
                        <div className="flex flex-col">
                            <div className="flex items-left justify-start bottom-logo">
                                <img className="h-16 w-full md:pr-14 lg:pr-14" src={Logo}/>
                            </div>

                            <div className="flex items-left justify-start show-vi hide-vi ">
                                <img className="h-full w-full" src={Video}/>
                            </div>

                            <div className="flex flex-row justify-between md:justify-start md:gap-5 lg:justify-start lg:gap-8 mt-10 bottom-icons">
                                <div><img className="h-5" src={Face}/></div>
                                <div><img className="h-5" src={Twitter}/></div>
                                <div><img className="h-5" src={Instagram}/></div>
                                <div><img className="h-5" src={Youtube}/></div>
                                <div><img className="h-5" src={Pinterest}/></div>
                            </div>

                            
                        </div>
                        <div className="text-white hide-el">
                            <h1 className="text-xl">Massa</h1>
                            <div className="text-base text-[#A0A2A6] mt-5">
                                <p className="mt-5">Aliquet et.</p>
                                <p className="mt-5">Donec.</p>
                                <p className="mt-5">Neque nec feugiat.</p>
                            </div>
                        </div>
                        <div className="text-white hide-el">
                            <h1 className="text-xl">Enim.</h1>
                            <div className="text-base text-[#A0A2A6] mt-5">
                                <p className="mt-5">Lorem</p>
                                <p className="mt-5">Ipsium</p>
                                <p className="mt-5">Donec.</p>
                            </div>
                        </div>
                        <div className="text-white hide-el">
                            <h1 className="text-xl">Fusce..</h1>
                            <div className="text-base text-[#A0A2A6] mt-5">
                                <p className="mt-5">Amet.</p>
                                <p className="mt-5">Tincidunt.</p>
                                <p className="mt-5">Felis nec augue.</p>
                            </div>
                        </div>



                        <div className="flex items-left justify-start hide-el">
                                <img className="h-full w-full" src={Video}/>
                        </div>





                    </div>
                </div>



                <div className="w-full bg-[#FCD002] footer-sm">
                <div className="flex flex-col md:flex-row lg:flex-row text-center mt-5 md:mt-0 lg:mt-0 h-12 container mx-auto justify-center lg:justify-between lg:pt-3 pt-6">
                    <div className="font-bold hide-vi show-el mt-5 mb-1">MARCH MADNESS SALE<br></br>EXPIRES SOON</div>
                    <div className="font-semibold hide-el">Nibh tincidunt.</div>
                    <div className="font-semibold mb-3">00 DAYS : 00 HOURS : 00 MIN : 00 SEC</div>
                    <div><button className="bg-blue-700 font-semibold hover:bg-indigo-600text-sm text-white uppercase w-48 rounded-lg">Lorem Ipsum</button></div>
                </div>
                </div>
                    
                
            </div>
        );
    }
}