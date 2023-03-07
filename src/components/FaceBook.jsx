import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import FaceBookCard from './FaceBookCard';

const FaceBook = () => {
    return (
        <div className='facebook-div'>
            {profiles.map((profile, i) => {
                return <FaceBookCard firstName={profile.firstName} lastName={profile.lastName} country={profile.country} picture={profile.img} type={profile.isStudent ? 'Student' : 'Teacher'} key={i} className="facebook-profile"/>
            })}
        </div>
    )
}

export default FaceBook;