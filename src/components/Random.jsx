import React from "react";

const Random = (props) => {
    const { min, max } = props;
    const randNumber = Math.floor(Math.random() * (max - min) ) + min;
    return (
        <div className="random-div">
            <p className="random-text">
                Random value between {min} and {max}: {randNumber}
            </p>
        </div>
    )
}

export default Random;