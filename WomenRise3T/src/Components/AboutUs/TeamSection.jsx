import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TeamMember from './TeamMember';

const TeamSection = ({ teamMembers }) => {
    return (
        <Row className="justify-content-center my-4">
            {teamMembers.map((member, index) => (
                <Col md={3} className="d-flex justify-content-center" key={index}>
                    <TeamMember member={member} />
                </Col>
            ))}
        </Row>
    );
};

export default TeamSection;
