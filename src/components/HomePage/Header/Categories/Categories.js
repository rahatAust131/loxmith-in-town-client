import { faBell, faCameraRetro, faDoorClosed, faLockOpen, faUniversalAccess, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.css";

const Categories = () => {
    return (
        <div classNameName="container overflow-hidden">
            <div className="row gx-3">
                <div className="col-md-2" >
                    <Link to="" className="category-card text-center p-3 border bg-dark">
                        <FontAwesomeIcon className="icon" icon={faUnlock} />
                        Loxmith Services
                    </Link>
                </div>
                <div className="col-md-2" >
                    <Link to="" className="category-card text-center p-3 border bg-dark">
                        <FontAwesomeIcon className="icon" icon={faCameraRetro} />
                        Video Survelience
                    </Link>
                </div>
                <div className="col-md-2" >
                    <Link to="" className="category-card text-center p-3 border bg-dark">
                        <FontAwesomeIcon className="icon" icon={faUniversalAccess} />
                        Access Control
                    </Link>
                </div>
                <div className="col-md-2" >
                    <Link to="" className="category-card text-center p-3 border bg-dark">
                        <FontAwesomeIcon className="icon" icon={faLockOpen} />
                        Safes {'&'} Locks
                    </Link>
                </div>
                <div className="col-md-2" >
                    <Link to="" className="category-card text-center p-3 border bg-dark">
                        <FontAwesomeIcon className="icon" icon={faDoorClosed} />
                        Security Doors
                    </Link>
                </div>
                <div className="col-md-2" >
                    <Link to="" className="category-card text-center p-3 border bg-dark">
                        <FontAwesomeIcon className="icon" icon={faBell} />
                        Alarm System
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;