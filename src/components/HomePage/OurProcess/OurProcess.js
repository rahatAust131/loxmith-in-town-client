import React from 'react';
import './OurProcess.css'
import telephoneIcon from '../../../images/telephone.png';
import processIcon from '../../../images/process.png';
import settingsIcon from '../../../images/settings-icon.png';
import walkingIcon from '../../../images/human-icon.jpg';
import likeIcon from '../../../images/like-icon.png';

const OurProcess = () => {
    return (
        <div className="process-container ">
            <div className="row gx-5 p-3">
                <div className="d-flex align-items-center justify-content-center">
                    <img className="img-fluid" style={{width: '3%'}} src={processIcon} alt="" />
                    <h5 className="text-golden">Our Process</h5>
                </div>
                <h2 className="text-center text-light">How <span className="text-golden">We </span><span className="text-golden"> Do </span> The Job</h2>
            </div>
            <div className="row gx-5 container-fluid p-3">
                <div className="process-card col-md-3 d-flex flex-column p-3 justify-content-center align-items-center text-light">
                    <img className="w-25 img-fluid" src={telephoneIcon} alt="" />
                    <h4>Call Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis iusto beatae consectetur! Eos ipsum at animi ex fugiat quae?</p>
                </div>
                <div className="process-card col-md-3 d-flex flex-column p-3 justify-content-center align-items-center text-light">
                    <img className="w-25 img-fluid" src={walkingIcon} alt="" />
                    <h4>We Come To Your Location</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis iusto beatae consectetur! Eos ipsum at animi ex fugiat quae?</p>
                </div>
                <div className="process-card col-md-3 d-flex flex-column p-3 justify-content-center align-items-center text-light">
                    <img className="w-25 img-fluid" src={settingsIcon} alt="" />
                    <h4>System Modules</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis iusto beatae consectetur! Eos ipsum at animi ex fugiat quae?</p>
                </div>
                <div className="process-card col-md-3 d-flex flex-column p-3 justify-content-center align-items-center text-light">
                    <img className="w-25 img-fluid" src={likeIcon} alt="" />
                    <h4>Like Us?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione perferendis iusto beatae consectetur! Eos ipsum at animi ex fugiat quae?</p>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;