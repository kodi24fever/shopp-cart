import React, { useState } from 'react';

//import social media logos
import Face from './../../assets/Face-Icon.png';
import Twitter from './../../assets/Twitter-Icon.png';
import Instagram from './../../assets/Instagram-Icon.png';
import Youtube from './../../assets/Youtube-Icon.png';
import Pinterest from './../../assets/Pinterest-Icon.png';



export default function SocialMediaIcons() {

    return(
        <div className="flex flex-row justify-between md:justify-start md:gap-5 lg:justify-start lg:gap-8 mt-10 bottom-icons">
            <div><img className="h-5" src={Face}/></div>
            <div><img className="h-5" src={Twitter}/></div>
            <div><img className="h-5" src={Instagram}/></div>
            <div><img className="h-5" src={Youtube}/></div>
            <div><img className="h-5" src={Pinterest}/></div>
        </div>
    );
}