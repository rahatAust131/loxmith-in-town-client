import React from 'react';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Navbar from '../Navbar/Navbar';

import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Categories />
        </div>
    );
};

export default Header;