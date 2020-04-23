import React from 'react';
import './Outputuser.css';

const OutputUser = (props) => {

    return(
        <div className="Para">
             <p>You have entered City: {props.city}</p>
            <p>You have entered username: {props.userName}</p>
            <p>You have entered Address: {props.address}</p>
            <p>You have entered Email: {props.email}</p>
            <p>You have entered PhoneNumber: {props.phoneNumber}</p>
           
        </div>
    );
    
}

export default OutputUser;