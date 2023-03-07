import React from "react";
import Rating from "./Rating";

const DriverCard = (props) => {
    const { name, rating, img, car } = props;
    return (
        <div className="driver-card">
            <div className="driver-card-pic">
                <img src={img} alt="Profile picture"/>
            </div>
            <div className="driver-card-info">
                <h2 className="driver-card-name">{name}</h2>
                <Rating className="driver-card-rating">{rating}</Rating>
                <h3 className="driver-card-car">{car.model} - {car.licensePlate}</h3>
            </div>
        </div>
    )
}

export default DriverCard;