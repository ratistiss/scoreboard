import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
    const { players, title } = props;
    return (
        <header>
            <Stats />
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
}

export default Header;