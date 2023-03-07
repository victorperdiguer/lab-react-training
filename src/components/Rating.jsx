import React from "react";

const Rating = (props) => {
    const { children } = props;

    return (
        <div className="rating-div">
            <h2 className="rating-text">{"★".repeat(Math.round(children))}{"☆".repeat(5-Math.round(children))}</h2>
        </div>
    )
}

export default Rating;