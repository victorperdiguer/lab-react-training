import React from "react";

const IdCard = (props) => {
    const {lastName, firstName, gender, height, birth, picture} = props;
    return (
        <div className="card">
            <div className="picture-div">
                <img src={picture} alt="Profile" className="picture" />
            </div>
            <div className="text-div">
                <p><span className="strong">First name: </span>{firstName}</p>
                <p><span className="strong">Last name: </span>{lastName}</p>
                <p><span className="strong">Gender: </span>{gender}</p>
                <p><span className="strong">Height: </span>{height}</p>
                <p><span className="strong">Birth: </span>{birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;