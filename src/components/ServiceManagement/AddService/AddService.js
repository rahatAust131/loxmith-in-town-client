import React, { useState } from "react";
import axios from "axios";
import "./AddService.css";
import { useForm } from "react-hook-form";
import AdminSideBar from "../../Dashboard/AdminDashboard/AdminSideBar/AdminSideBar";

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const makeInputsEmpty = () => {
        document.getElementById('service-title').value = "";
        document.getElementById('service-description').value = "";
        document.getElementById('service-file').value = "";
    };

    const onSubmit = data => {
        const serviceData = { 
            title: data.title,
            description: data.description,
            imageURL: imageURL
        };
        console.log(serviceData);

        fetch('https://sheltered-woodland-87438.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-type': 'Application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(result => {
                if(result) {
                    alert('Your Service Has Been Added to database');
                    if(alert) {
                        makeInputsEmpty();
                    }
                } else {
                    alert("Sorry! Couldn't add the Service");
                }
            })        
    };

    const handleImageUpload = (event) => {
        const imgData = new FormData();
        imgData.set('key', "a862742c2a2097de61002c5a0d159908");
        imgData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(err => console.log("error", err))
    };
    
    return (
        <div className="row g-3 container-fluid m-auto">
            <div className="col-md-3">
                <AdminSideBar />
            </div>
            <div className="col-md-9 bg-warning">
                <div className="form-container">
                    <form className="form-div" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Service Title or Name" {...register("title")} id="service-title" />
                        <br />
                        <textarea className="w-100" placeholder="Description" {...register("description")} id="service-description" />
                        <br />
                        <input type="file" {...register("exampleRequired", { required: true })} onChange={handleImageUpload} id="service-file" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className="btn submit-btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
