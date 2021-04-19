import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../HomePage/Header/Navbar/Navbar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';

const Dashboard = () => {

    const [admins, setAdmins] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'http://localhost:5054/admins';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    }, []);

    return (
        <div>
            <Navbar />
            <hr/>
            {
                admins.map(admin => admin.email === loggedInUser.email ? <AdminDashboard /> : <UserDashboard />)
            }
        </div>
    );
};

export default Dashboard;