import React from "react";
import { useState } from "react";

const ClickablePicture = (props) => {
    const { imgBefore, imgAfter } = props;
    const [image, setImage] = useState(imgBefore);

    const handleImage = () => {
        image === imgBefore ? setImage(imgAfter) : setImage(imgBefore);
    }

    return (
        <img src={image} className="clickable-image" onClick={handleImage}/>
    )
}

export default ClickablePicture;