import React from "react";

const FaceBookCard = (props) => {
    const {lastName, firstName, country, type, picture, bgColor} = props;
    return (
        <div className="card facebook-card" style={{backgroundColor: bgColor}}>
            <div className="picture-div facebook-picture-div">
                <img src={picture} alt="Profile" className="facebook-picture" />
            </div>
            <div className="text-div">
                <p><span className="strong">First name: </span>{firstName}</p>
                <p><span className="strong">Last name: </span>{lastName}</p>
                <p><span className="strong">Country: </span>{country}</p>
                <p><span className="strong">Type: </span>{type}</p>
            </div>
        </div>
    )
}

export default FaceBookCard;