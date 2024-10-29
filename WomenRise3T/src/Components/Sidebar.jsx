import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ava from '../assets/avatar.svg'


const Sidebar = () => {
    return (
        <div>
            <img src={Ava} alt="Profile" className='mb-4' />
            <Nav className="flex-column">
                <div style={{ backgroundColor: '#F6FBFD', border: '1px solid #dbdad7' }}>
                    <Nav.Link as={Link} to="/aktivitas" className='text-black'>Aktivitas</Nav.Link>
                </div>
                <div style={{ backgroundColor: '#F6FBFD', border: '1px solid #dbdad7' }}>
                    <Nav.Link as={Link} to="/profile" active>Profile Saya</Nav.Link>
                </div>
                <div style={{ backgroundColor: '#F6FBFD', border: '1px solid #dbdad7' }}>
                    <Nav.Link as={Link} to="/" className="text-danger">Log Out</Nav.Link>
                </div>
            </Nav>
        </div>
    );
};

export default Sidebar;

