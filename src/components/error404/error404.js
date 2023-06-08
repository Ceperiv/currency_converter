import React from 'react';
import {NavLink} from "react-router-dom";

import './error404.scss'
import err404 from '../../assets/err404.jpg'

function Error404(props) {
    return (
        <div className="not-found">
            <NavLink to={'/converter'}> Return to main page </NavLink>
            <img className='img' src={err404} alt='err404'/>
        </div>
    );
}

export {
    Error404
};
