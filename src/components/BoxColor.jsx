import React from "react";

const BoxColor = (props) => {
    const { r, g, b } = props;
    const color = "rgb(" + r + ", " + g + ", " + b + ")"
    //Thank you Tim Down @ StackOverflow
    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    const hexColor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return (
        <div className="box-color" style={{backgroundColor: color}}>
            <p className="box-color-text">
                rgb({r}, {g}, {b})
                <br />
                {hexColor}
            </p>
        </div>
    )
}

export default BoxColor;