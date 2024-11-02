import React from 'react';
import { Container } from 'react-bootstrap';
import NotLoggedIn from '../Components/NotLoggedIn';
import AboutSection from '../Components/AboutUs/AboutSection';
import TeamSection from '../Components/AboutUs/TeamSection';

const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Diana',
            city: 'Palembang',
            //img: DianaImage,
            linkedin: '#',
        },
        {
            name: 'Ellena',
            city: 'Medan',
            //img: EllenaImage,
            linkedin: '#',
        },
        {
            name: 'Terrana',
            city: 'Tuban',
            //img: TerranaImage,
            linkedin: '#',
        },
    ];

    return (
        <>
            <Container fluid className="my-5" style={{ fontFamily: 'Inter, Sans-serif' }}>
                <h2 className="text-center mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004987' }}>
                    About Us</h2>
                <AboutSection />
                <h3 className="text-center mt-5" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004987' }}>
                    Behind WomenRise3T</h3>
                <TeamSection teamMembers={teamMembers} />
            </Container>
            {!localStorage.getItem('token') && <NotLoggedIn />}
        </>
    );
};

export default AboutUs;

