import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import FaceBookCard from './FaceBookCard';

const FaceBook = () => {
    const display = profiles.map((profile, i) => {
        return {
            firstName: profile.firstName, 
            lastName: profile.lastName, 
            country: profile.country,
            picture: profile.img, 
            type: profile.isStudent ? 'Student' : 'Teacher',
            key: i, 
            className: 'facebook-profile',
            backgroundColor: 'white'
        }
    });
    const countryFilter = {All: true};
    profiles.forEach((profile) => countryFilter[profile.country] = false);
    const countryList = Object.keys(countryFilter);
    const [selected, setSelected] = useState(countryFilter);

    const handleFilters = (e) => {
        setSelected(prev => ({
            ...prev,
            [e.target.value]: !prev[e.target.value]
        }));
    }

    
    return (
        <div className='facebook-div'>
            {countryList.map((country) => {
                return (
                    <button 
                        key={country}
                        className="facebook-button"
                        style={{backgroundColor: selected[country] || selected.All ? 'lightblue' : 'white'}}
                        onClick={handleFilters}
                        value={country}
                        >
                            {country}
                    </button>
                )
            })}

            {display.map((profile, i) => {
                return (
                    <FaceBookCard 
                        key={i} 
                        firstName={profile.firstName} 
                        lastName={profile.lastName} 
                        country={profile.country} 
                        picture={profile.picture} 
                        type={profile.isStudent ? 'Student' : 'Teacher'} className="facebook-profile"
                        bgColor={selected[profile.country] || selected.All ? 'lightblue' : 'white'}
                        style={{backgroundColor: profile.backgroundColor}}
                    />
                )
            })}
        </div>
    )
}

export default FaceBook;