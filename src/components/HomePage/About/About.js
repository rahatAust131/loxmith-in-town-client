import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import OurProcess from '../OurProcess/OurProcess';
import OurProducts from '../OurProducts/OurProducts';

const About = () => {
    return (
        <div>
            <Navbar />
            <OurProcess />
            <hr/>
            <OurProducts />
        </div>
    );
};

export default About;