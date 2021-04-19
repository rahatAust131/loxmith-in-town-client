import React from 'react';
import './UserSideBar.css';
import { Link } from 'react-router-dom';

const UserSideBar = () => {
    return (
        <div className="user-sidebar-container">
            <Link className="btn dashboard-links" to="/addReview" >Add Review</Link>
            <br/>
            <Link className="btn dashboard-links" to="/servicesOfUser" >Order Service</Link>
            <br/>
            <Link className="btn dashboard-links" to="/userServices" >Order List</Link>
        </div>
    );
};

export default UserSideBar;