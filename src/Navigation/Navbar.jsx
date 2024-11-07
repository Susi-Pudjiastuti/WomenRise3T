import logo from '../assets/logo/Logo WomenRise3T.svg'
import { NavLink } from "react-router-dom";


function Navbar() {
    const ava = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container-fluid px-0 px-lg-5 py-2 mx-5 d-flex gap-5">
                    <NavLink to="/">
                        <div className="d-flex gap-2 align-items-center">
                            <img src={logo} width="48" height="auto" />
                            <div className="vesper-libre-bold pt-2" id="nav-title">WomenRise3T</div>
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-text gap-4 gap-lg-5 flex-grow-1 ms-0 ms-lg-5 ">
                            <li className="nav-item ">
                                <NavLink to="/" style={({ isActive }) => { return { color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" }; }}
                                >Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutus" style={({ isActive }) => { return { color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" }; }}
                                > About us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/mentor" style={({ isActive }) => { return { color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" }; }}
                                >Mentor
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/motivation" style={({ isActive }) => { return { color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" }; }}
                                >Motivation
                                </NavLink>
                            </li>
                            {localStorage.getItem('token') && <li className="nav-item">
                                <NavLink to="/scholarships" style={({ isActive }) => { return { color: isActive ? "#004987" : "black", fontWeight: isActive ? "bold" : "" }; }}
                                >Scholarship
                                </NavLink>
                            </li>}

                        </ul>

                        {/* <div className="my-4 my-lg-0 d-flex gap-2 align-items-center">
                        <a className="btn button-style-outline px-3 py-2" href="/Login-page/login.html">Log Out</a>
                    </div> */}
                        <div className="my-4 my-lg-0 d-flex gap-2 align-items-center">
                            {localStorage.getItem('token') ? <a href='/profile'><img src={ava.avatar} className='rounded-circle object-fit-cover' style={{ width: '3rem', height: '3rem' }} /></a>
                                : <div className="my-4 my-lg-0 d-flex gap-2 align-items-center">
                                    <NavLink to="/signup" className="btn button-style-text">Sign Up</NavLink>
                                    <NavLink to="/login" className="btn button-style-navy px-3 py-2">Log In</NavLink>
                                </div>}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar