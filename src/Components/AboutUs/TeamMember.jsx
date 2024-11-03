import React from 'react';
import { Card } from 'react-bootstrap';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const TeamMember = ({ member }) => {
    return (
        <Card className="text-center rounded-4 shadow" style={{ width: '14rem' }}>
            <Card.Img variant="top" className='p-3 img-fluid ' src={member.img} alt={member.name} />
            <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.city}</Card.Text>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: "5px" }}>
                    <FaLinkedin />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: 'black', cursor: "pointer", }}>
                    <FaGithub />
                </a>
            </Card.Body>
        </Card>
    );
};

export default TeamMember;
