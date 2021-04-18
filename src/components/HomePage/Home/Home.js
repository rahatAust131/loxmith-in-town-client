import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header/Header';
import OurProcess from '../OurProcess/OurProcess';
import OurProducts from '../OurProducts/OurProducts';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <hr />
            <WelcomeSection />
            <hr />
            <OurProducts />
            <hr />
            <Services />
            <hr />
            <OurProcess />
            <hr />
            <Testimonials />
            <hr />
            <Footer />
        </div>
    );
};

export default Home;