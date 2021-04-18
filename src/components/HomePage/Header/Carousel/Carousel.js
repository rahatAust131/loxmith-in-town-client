import React from 'react';
import { Link } from 'react-router-dom';
import slideImg1 from "../../../../images/lock-slide-img1.jpg";
import slideImg2 from "../../../../images/lock-slide-img2.jpg";
import slideImg3 from "../../../../images/lock-slide-img3.jpg";
import './Carousel.css';

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slideImg1} class="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block m-3">
                            <h4 style={{color: 'whitesmoke'}}>Your Safety is Our Priority</h4>
                            <Link to="" className="btn discover-btn text-uppercase">Discover More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slideImg2} class="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block m-3">
                            <h4 style={{color: 'whitesmoke'}}>Delivering The Best Lock Smith Services</h4>
                            <Link to="" className="btn discover-btn text-uppercase">Discover More</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slideImg3} class="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block m-3">
                            <h4 style={{color: 'whitesmoke'}}>Get The Best Locks And Keys</h4>
                            <Link to="" className="btn discover-btn text-uppercase">Discover More</Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    );
};

export default Carousel;