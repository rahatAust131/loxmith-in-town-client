import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Checkout.css';
import PaymentProcess from './PayentProcess/PaymentProcess';

const Checkout = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const url = `https://sheltered-woodland-87438.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [id]);

    // const handleCheckout = () => {
    //     const orderDetails = {
    //         name: loggedInUser.displayName,
    //         email: loggedInUser.email,
    //         time: new Date(),
    //         item: product
    //     }

    //     fetch('https://sheltered-woodland-87438.herokuapp.com/addServicesOfUser', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(orderDetails)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // alert("Your Order has been Placed Successfully");
    //         })
    //         .catch(err => console.log('error', err))
    // };

    return (
        <div className="row g-3 container-fluid m-auto d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="check-container container-fluid m-auto p-3">
                    <table className="table table-striped checkout-table w-100">
                        <thead>
                            <tr>
                                <th className="text-light w-25" scope="col">Service Name</th>
                                <th className="text-light w-25" scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-light">{product.title}</td>
                                <td className="text-light">{product.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-md-6">
                <PaymentProcess />
            </div>
        </div>
    );
};

export default Checkout;