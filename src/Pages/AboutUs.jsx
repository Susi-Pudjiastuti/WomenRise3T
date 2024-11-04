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
            img: 'https://s3.amazonaws.com/shecodesio-production/uploads/files/000/149/156/original/1000061928.jpg?1730452585',
            linkedin: 'https://www.linkedin.com/in/diana-novita11/',
            github: 'https://github.com/diananov11',
        },
        {
            name: 'Ellena',
            city: 'Medan',
            img: 'https://i.ibb.co.com/qgxjqP2/IMG-20241103-105431.jpg',
            linkedin: 'https://www.linkedin.com/in/ellenaamanda',
            github: 'https://github.com/EllenaAmanda',
        },
        {
            name: 'Terrana',
            city: 'Tuban',
            img: 'https://i.ibb.co.com/ZH0Nr7x/Whats-App-Image-2024-08-19-at-6-06-05-PM.jpg',
            linkedin: 'https://www.linkedin.com/in/terrana-willma-658bb216a/',
            github: 'https://github.com/TerranaW'
        },
    ];

    return (
        <>
            <Container fluid className="my-5">
                <h2 className="text-center mb-5" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004987' }}>
                    About Us</h2>
                <AboutSection className="mb-3" />
                <h3 className="text-center mt-5" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004987' }}>
                    Behind WomenRise3T</h3>
                <TeamSection teamMembers={teamMembers} />
            </Container>
            {!localStorage.getItem('token') && <NotLoggedIn />}
        </>
    );
};

export default AboutUs;

