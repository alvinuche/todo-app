import React from 'react';
import Moment from 'moment';



function Header() {

    return (
        <div>
            <div className="heading">
                <h1>{Moment().format('dddd, MMMM DD')}</h1>
            </div>
        </div>
    )
}

export default Header;
