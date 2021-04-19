import { faFacebook, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="">
            <div className="row g-3 footer-top container-fluid m-auto d-flex justify-content-center align-items-center">
                <div className="col-md-3 d-flex flex-column text-light p-3">
                    <h6>Lorem ipsum dolor sit amet.</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam!</p>
                    <small>Lorem, ipsum dolor.</small>
                    <div className="d-flex">
                        <Link to=""><FontAwesomeIcon className="icon" icon={faFacebook} /></Link>
                        <Link to=""><FontAwesomeIcon className="icon" icon={faInstagram} /></Link>
                        <Link to=""><FontAwesomeIcon className="icon" icon={faYoutube} /></Link>
                        <Link to=""><FontAwesomeIcon className="icon" icon={faGithub} /></Link>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center p-3 text-decoration-none">
                    <Link className="text-link" to="" >About us</Link>
                    <Link className="text-link" to="" >Our Team</Link>
                    <Link className="text-link" to="" >Services</Link>
                    <Link className="text-link" to="" >Pricing</Link>
                    <Link className="text-link" to="" >Testimonials</Link>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center p-3 text-decoration-none">
                    <Link className="text-link" to="" >Door Repairs</Link>
                    <Link className="text-link" to="" >Door Security</Link>
                    <Link className="text-link" to="" >Garage Security</Link>
                    <Link className="text-link" to="" >Lock Fitting</Link>
                    <Link className="text-link" to="" >Burlgary Repairs</Link>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center p-3 text-decoration-none">
                    <Link className="text-link" to="" >Service Area</Link>
                    <Link className="text-link" to="" >Angel Investor</Link>
                    <Link className="text-link" to="" >Client Reviews</Link>
                    <Link className="text-link" to="" >Our Partners</Link>
                    <Link className="text-link" to="" >Contact Us</Link>
                </div>
            </div>
            <div className="row g-3 footer-bottom container-fluid m-auto d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    Copyrights &copy; {new Date().getFullYear()} 
                    <br/> All Rights Reserved by Rahat Chowdhury Zisan
                </div>
                <div className="col-md-4">
                    <h2>LOXMITH IN TOWN</h2>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center">
                    <Link className="text-link m-0 p-0" to="" >Terms Of Service</Link>
                    <Link className="text-link m-0 p-0" to="" >Career</Link>
                    <Link className="text-link m-0 p-0" to="" >GDPR</Link>
                    <Link className="text-link m-0 p-0" to="" >Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;