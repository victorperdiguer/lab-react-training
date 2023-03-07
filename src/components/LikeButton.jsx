import React from "react";
import { useState } from "react";

const LikeButton = () => {
    const colors = ['purple','blue','green','yellow','orange','red'];
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('purple');

    const handleButton = () => {
        setCounter(prev => prev+1);
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(randomColor);
        setColor(randomColor);
    }

    return (
        <button className="like-button" onClick={handleButton} style={{backgroundColor: color}}>{counter} {counter !== 1 ? 'Likes' : 'Like'}</button>
    )
}

export default LikeButton;