import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import rockLockImage from '../../../../images/rocklock.png'
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark my-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand navbar-img-link text-uppercase" href="https://www.seekpng.com/ipng/u2e6a9t4y3u2i1q8_lock-and-key-royalty-free-vector-clip-art/"><img className="logo" src={rockLockImage} alt=""/>Rock-Lock</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link className="nav-link active navbar-links" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link navbar-links" to="/about">About</Link>
                        <Link className="nav-link navbar-links" to="/services">Services</Link>
                        <Link className="nav-link navbar-links" to="/dashboard">Dashboard</Link>
                        <Link className="nav-link navbar-links" to="/reviews">Reviews</Link>
                        <Link className="nav-link navbar-links disabled" to="/deals" tabIndex="-1" aria-disabled="true">Shop</Link>
                        {
                            loggedInUser.email ? <button className="btn btn-warning ml-3 mr-3" onClick={() => setLoggedInUser({})}>LogOut</button> 
                            : <Link className="btn btn-success ml-3 mr-3" to="/login">Login</Link> 
                        }
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;