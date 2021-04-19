import React from 'react';
import './AdminDashboard.css';
import AdminSideBar from './AdminSideBar/AdminSideBar';


const AdminDashboard = () => {
    return (
        <div className="row g-3">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-9"></div>
        </div>
    );
};

export default AdminDashboard;