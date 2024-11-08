import logo from '../assets/logo/Logo WomenRise3T.svg';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

function Navbar() {
    const [show, setShow] = useState(false);
    const ava = JSON.parse(localStorage.getItem('user'));

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <nav className="navbar navbar-expand-lg border-bottom" style={{ height: '80px' }}>
                <div className="container-fluid px-0 px-lg-5 py-2 mx-5 d-flex gap-5">
                    <NavLink to="/">
                        <div className="d-flex gap-2 align-items-center">
                            <img src={logo} width="48" height="auto" alt="Logo" />
                            <div className="vesper-libre-bold pt-2" id="nav-title">WomenRise3T</div>
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" onClick={handleShow} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-none d-lg-block">
                        <ul className="navbar-nav navbar-text gap-4 gap-lg-5 flex-grow-1 ms-0 ms-lg-5 ">
                            <li className="nav-item">
                                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutus" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                    About us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mentor" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                    Mentor
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/motivation" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                    Motivation
                                </NavLink>
                            </li>
                            {localStorage.getItem('token') && (
                                <li className="nav-item">
                                    <NavLink to="/scholarships" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                        Scholarship
                                    </NavLink>
                                </li>
                            )}
                        </ul>

                        <div className="my-4 d-flex gap-2 align-items-center">
                            {localStorage.getItem('token') ? (
                                <NavLink to='/profile'>
                                    <img src={ava.avatar} className='rounded-circle object-fit-cover' style={{ width: '3rem', height: '3rem' }} alt="Profile" />
                                </NavLink>
                            ) : (
                                <div className="my-4 d-flex gap-2 align-items-center">
                                    <NavLink to="/signup" className="btn button-style-text">Sign Up</NavLink>
                                    <NavLink to="/login" className="btn button-style-navy px-3 py-2">Log In</NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Offcanvas Menu for Mobile */}
            <Offcanvas show={show} onHide={handleClose} className="bg-light" style={{ width: '250px' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} width="40" height="auto" alt="Logo" />
                        <span className="ms-2">Menu</span>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex flex-column align-items-start mt-4">
                        {localStorage.getItem('token') ? (
                            <NavLink to='/profile' className="d-flex align-items-center mb-2">
                                <img src={ava.avatar} className='rounded-circle' style={{ width: '5rem', height: '5rem' }} alt="Profile" />
                            </NavLink>
                        ) : (
                            <div className="d-flex gap-2">
                                <NavLink to="/signup" className="btn btn-primary">Sign Up</NavLink>
                                <NavLink to="/login" className="btn btn-secondary">Log In</NavLink>
                            </div>
                        )}
                    </div>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item mb-2">
                            <NavLink to="/" className="nav-link" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/aboutus" className="nav-link" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                About us
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/mentor" className="nav-link" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                Mentor
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/motivation" className="nav-link" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                Motivation
                            </NavLink>
                        </li>
                        {localStorage.getItem('token') && (
                            <li className="nav-item mb-2">
                                <NavLink to="/scholarships" className="nav-link" style={({ isActive }) => ({ color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" })}>
                                    Scholarship
                                </NavLink>
                            </li>
                        )}
                    </ul>


                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Navbar;
