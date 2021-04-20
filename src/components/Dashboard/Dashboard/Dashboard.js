import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../HomePage/Header/Navbar/Navbar';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';


const Dashboard = () => {

    const [admins, setAdmins] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'https://sheltered-woodland-87438.herokuapp.com/admins';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    }, []);

    let userState = 0;
    const checkAdminOrNot = () => {
        admins.map(admin => admin.email === loggedInUser.email ? userState = 1
            : userState = 2);
    }
    checkAdminOrNot();

    return (
        <div>
            <Navbar />
            <hr />
            {
                userState === 1 ? <AdminDashboard /> : <UserDashboard />
            }
        </div>
    );
};

export default Dashboard;