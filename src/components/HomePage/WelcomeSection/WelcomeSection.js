import React from 'react';
import './WelcomeSection.css';
import welcomeSectionImage from '../../../images/welcome-section-img.jpg'

const WelcomeSection = () => {
    return (
        <div className="row gx-3 container-fluid ms-auto mt-3">
            <div className="col-md-6">
                <div className="row">
                    <h4 className="welcome-text">Welcome</h4>
                </div>
                <div className="row p-3 bg-dark text-light d-flex align-items-center" style={{ height: '85%' }}>
                    <h3>We Provide <span className="text-golden">Services And Securities</span> <br/>
                    For <span className="text-golden">Multiple Customers</span> <br/>
                    In Different Segments </h3>
                </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={welcomeSectionImage} alt="" />
            </div>
        </div>
    );
};

export default WelcomeSection;