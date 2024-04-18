import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cardcontex';

const Navbar = () => {
    const { cartItems } =useCart() ; 

    return (
        <center>
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">SR COLLECTIONS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'}className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>

                            < Link to={'/about'}className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </Link>

                            <li className="nav-item">
                            <Link to={'/product'}className="nav-link" href="#">Product</Link>
                            </li>
                            < Link to={'/contact'}className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </Link>
                        </ul>
                        <div className="button">
                           <Link to={"/login"}> <a href='' className='btn btn-outline-dark'>
                                <i className='fa fa-sign-in me-1'></i> Login
                            </a></Link>
                            <Link to={"/register"}>
                                <a href='' className='btn btn-outline-dark ms-2'>
                                    <i className='fa fa-user-plus me-1'></i> Register
                                </a>
                            </Link>
                            <Link to="/cart">
                                <button className='btn btn-outline-dark ms-2'>
                                    <i className='fa fa-shopping-cart me-1'></i>
                                    Cart({cartItems.length})
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </center>
    );

};

export default Navbar;
