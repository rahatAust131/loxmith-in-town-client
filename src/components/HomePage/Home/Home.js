import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../Header/Header/Header';
import OurProcess from '../OurProcess/OurProcess';
import OurProducts from '../OurProducts/OurProducts';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import './Home.css';

const Home = () => {

    return (
        <div className="container-fluid m-auto">
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
            <Reviews />
            <hr />
            <Footer />
        </div>
    );
};

export default Home;