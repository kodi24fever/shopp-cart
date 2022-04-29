import React, {useState} from 'react';


export default function Toggle() {
    const [show, setShow] = useState(false);
    const toggleHide = () => {
        setShow(!show);
    };
    return [show, toggleHide];
}