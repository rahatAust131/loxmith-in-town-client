import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
import './AddReview.css';
import Navbar from '../../../HomePage/Header/Navbar/Navbar';
import UserSideBar from '../UserSideBar/UserSideBar';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const newReview = {
            imageURL: loggedInUser.photoURL,
            name: data.name,
            review: data.description,
            starRating: data.rating
        };
        
        fetch('https://sheltered-woodland-87438.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Review added successfully");
                    if (alert) {
                        document.getElementById('name-field').value = '';
                        document.getElementById('rating-field').value = '';
                        document.getElementById('description-field').value = '';
                    }
                } else {
                    alert("Sorry! Couldn't add the review");
                }
            });
    };

    return (
        <div>
            <Navbar />
            <div className="row g-3">
                <div className="col-md-3">
                    <UserSideBar />
                </div>
                <div className="col-md-9 review-form-container">
                    <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                        <input id="name-field" className="form-group" placeholder="Name" {...register("name")} />
                        <textarea id="description-field" className="form-group w-50" placeholder="Description" {...register("description", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input id="rating-field" className="form-group" placeholder="Rate Our Service" {...register("rating")} />
                        <input className="btn btn-info" defaultValue="Add Review" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;