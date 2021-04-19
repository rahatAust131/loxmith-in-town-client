import React, { useEffect, useState } from 'react';
import Navbar from '../Header/Navbar/Navbar';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5054/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
                console.log(reviews);
            })
    }, []);

    return (
        <div>
            <Navbar />
            <div className="row g-5 review-container mt-3">
            <h2 className="text-center p-2">What <span className="text-colored">Our Clients</span> Say</h2>
            {
                reviews.map(review => 
                    <div className="col-md-4">
                        <div className="card h-100 review-card">
                            <img src={review.imageURL} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-text">Hi , I am <span className="text-golden">{review.name}</span> </h5>
                                <p className="card-text">{review.review}</p>
                            </div>
                            <div className="card-footer" id="review-card-footer">
                            <p className="card-text">My Personal Rating About Locksmith-in-town is : {review.starRating}</p>
                            </div>
                        </div>
                    </div>   
                )
            }
        </div>
        </div>
    );
};

export default Reviews;