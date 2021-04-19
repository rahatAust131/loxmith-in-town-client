import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AdminSideBar.css'

const AdminSideBar = () => {
    return (
        <div className="admin-sidebar-container">
            <h5 className="text-center">Locksmith In Town</h5>
            <Link to='/serviceList' className="btn service-btn">
                <FontAwesomeIcon icon={faTasks} /> Service List
                </Link>
            <Link to='/adminList' className="btn service-btn">
                <FontAwesomeIcon icon={faTasks} /> Admin List
                </Link>
            <Link to='/manageService' className="btn service-btn">
                <FontAwesomeIcon icon={faTasks} /> Manage Service
                </Link>
            <Link to='/addService' className="btn service-btn">
                <FontAwesomeIcon icon={faPlus} /> Add Service
                </Link>
            <Link to='/addAdmin' className="btn service-btn">
                <FontAwesomeIcon icon={faPlus} /> Add Admin
                </Link>
        </div>
    );
};

export default AdminSideBar;