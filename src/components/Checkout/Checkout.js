import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = `http://localhost:5054/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [id]);

    const handleCheckout = () => {
        const orderDetails = {
            name: loggedInUser.displayName,
            email: loggedInUser.email,
            time: new Date(),
            item: product
        }

        fetch('http://localhost:5054/addServicesOfUser', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // alert("Your Order has been Placed Successfully");
            })
            .catch(err => console.log('error', err))
    };

    return (
        <div className="check-container">
            <h2 className="checkout-heading">Checkout</h2>
            <div>
                <table className="table table-striped checkout-table">
                    <thead>
                        <tr >
                            <th className="th" scope="col">Service Name</th>
                            <th className="th" scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className=" td">{product.title}</td>
                            <td className=" td">{product.description}</td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
            <button onClick={handleCheckout} className="btn btn-success checkout-btn">Checkout</button>
        </div>
    );
};

export default Checkout;