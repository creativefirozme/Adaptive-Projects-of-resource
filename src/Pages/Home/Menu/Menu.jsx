import React from 'react';
import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>hello menu</title>
            </Helmet>
            <h1>this is menu</h1>
        </div>
    );
};

export default Menu;