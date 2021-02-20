import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = (props) => {
    return (
        <div>
            <h2>Thank You! Please Enjoy Your Pizza.</h2>
            {Object.keys(props.order).map(property => {
                return <p>{property}: {props.oder[property]}</p>
            })}
        </div>
    );
};

export default Confirmation;