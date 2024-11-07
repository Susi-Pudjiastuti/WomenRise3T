import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineHistoryEdu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";


const Sidebar = () => {
    const location = useLocation();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('lastGeneratedDate');
        localStorage.removeItem('limit');
        window.location.reload();
    }
    const ava = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <img src={ava.avatar} className='rounded-circle mb-3 object-fit-cover' style={{ width: '10rem', height: '10rem' }} />
            <Nav className="flex-column">
                <div style={{
                    border: '1px solid #dbdad7',
                    backgroundColor: location.pathname === '/aktivitas' ? '#004987' : '#F6FBFD',
                }}>
                    <Nav.Link as={Link} to="/aktivitas" className=' d-flex align-content-center text-center gap-3'
                        style={{ color: location.pathname === '/aktivitas' ? '#fafafa' : '#050505', }}>
                        <MdOutlineHistoryEdu size={20} /> Aktivitas</Nav.Link>
                </div>
                <div style={{
                    border: '1px solid #dbdad7',
                    backgroundColor: location.pathname === '/profile' ? '#004987' : '#F6FBFD',
                }}>
                    <Nav.Link as={Link} to="/profile" className='d-flex align-content-center text-center gap-3'
                        style={{ color: location.pathname === '/profile' ? '#fafafa' : '#050505', }}>
                        <CgProfile size={20} />Profile Saya</Nav.Link>
                </div>
                <div onClick={handleLogOut} style={{ backgroundColor: '#F6FBFD', border: '1px solid #dbdad7' }}>
                    <Nav.Link as={Link} to="/" className="text-danger d-flex align-content-center text-center gap-3"><IoMdLogOut size={20} />Log Out</Nav.Link>
                </div>
            </Nav>
        </div>
    );
};
export default Sidebar;
