import React from 'react';
import UserSideBar from './UserSideBar/UserSideBar';

const UserDashboard = () => {
    return (
        <div>
            <div className="row g-3">
                <div className="col-md-3">
                    <UserSideBar />
                </div>
                <div className="col-md-9">
                    
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;