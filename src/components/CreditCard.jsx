import React from "react";
import mastercardLogo from '../assets/images/mastercard.png';
import visaLogo from '../assets/images/visa.png';


const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    
    return (
        <div className="credit-card-div" style={{backgroundColor: bgColor}}>
            {type === 'Visa' ? <img src={mastercardLogo} className="credit-card-logo"/> : <img src={visaLogo} className="credit-card-logo"/>}
            <h2 className="card-number" style={{color: color}}>···· ···· ···· {number.substring(number.length-4)}</h2>
            <div className="card-detail">
                <p className="card-detail-text" style={{color: color}}>Expires {expirationMonth}/{expirationYear} <span className="card-detail-bank">{bank}</span></p>
                <p className="card-detail-text" style={{color: color}}>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;