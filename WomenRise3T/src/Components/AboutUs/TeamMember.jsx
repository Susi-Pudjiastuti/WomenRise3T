import React from 'react';
import { Card } from 'react-bootstrap';
import { FaLinkedin } from "react-icons/fa";

const TeamMember = ({ member }) => {
    return (
        <Card className="text-center" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={member.img} alt={member.name} />
            <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.city}</Card.Text>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </Card.Body>
        </Card>
    );
};

export default TeamMember;
