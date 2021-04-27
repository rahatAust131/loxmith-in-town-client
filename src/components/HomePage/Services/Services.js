import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = 'https://sheltered-woodland-87438.herokuapp.com/services';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        const url = 'https://sheltered-woodland-87438.herokuapp.com/admins';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    });

    const handleBuyProduct = id => {
        admins.map(admin => {
            if (admin.email === loggedInUser.email) {
                alert('You are an admin');
                if (alert) {
                    history.replace(from);
                }
            } else {
                history.push(`/service/${id}`)
            }
            return 0;
        });
    };

    return (
        <div className="row g-3">
            {
                services.map(service =>
                    <div className="col-md-4">
                        <div className="card h-100 service-card">
                            <img src={service.imageURL} className="card-img-top service-card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.description}</p>
                            </div>
                            <div className="card-footer" id="service-card-footer">
                                <button onClick={() => handleBuyProduct(service._id)} className="btn order-btn">Order Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Services;