import React, { useState } from "react";

const Carousel = (props) => {
    const { carousel } = props;
    console.log(carousel);
    const [image, setImage] = useState(Math.floor(Math.random() * carousel.length));
    const handleRight = () => {
        setImage(prev => Math.min(prev+1, carousel.length-1));
    }
    const handleLeft = () => {
        setImage(prev => Math.max(prev-1, 0));
    }
    return (
        <div className="carousel">
            <img src={carousel[image]} alt="Carousel picture" />
            <div className="carousel-buttons">
                <button onClick={handleLeft}>Left</button>
                <button onClick={handleRight}>Right</button>
            </div>
        </div>
    )
}

export default Carousel;