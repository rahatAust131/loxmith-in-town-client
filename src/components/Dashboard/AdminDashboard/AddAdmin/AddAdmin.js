import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../../HomePage/Header/Navbar/Navbar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AddAdmin.css';

const AddAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newAdmin = {
            name: data.name,
            email: data.email
        }
        fetch('https://sheltered-woodland-87438.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(newAdmin)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Admin added successfully");
                    if(alert) {
                        document.getElementById('name-field').value = '';
                        document.getElementById('email-field').value = '';
                    }
                } else {
                    alert("Sorry! Couldn't add the admin");
                }
            });
    }

    return (
        <div>
            <Navbar />
            <div className="row g-3 p-3">
                <div className="col-md-3">
                    <AdminSideBar />
                </div>
                <div className="col-md-9 admin-form-container">
                    <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                        <input id="name-field" className="form-group" placeholder="Name" {...register("name")} />
                        <br />
                        <input id="email-field" className="form-group" placeholder="Email Address" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <br />
                        <input className="btn btn-info" defaultValue="Add Admin" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;