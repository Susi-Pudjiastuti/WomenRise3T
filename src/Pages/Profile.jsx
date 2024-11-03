// Profile.js
import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useUser } from '../Context/UserContext';
import Sidebar from '../Components/Sidebar';
import EmailField from '../Components/Profile/EmailField';
import ResetPassword from '../Components/Profile/ResetPassword';
import OtherField from '../Components/Profile/OtherField';


const Profile = () => {
    const { user } = useUser();


    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
            <Row className="w-100 align-items-center" style={{ objectFit: 'cover', marginLeft: '70px', marginRight: '70px' }}>
                <Col md={4} className=" d-md-flex justify-content-center align-items-stretch">
                    <Sidebar />
                </Col>
                <Col>
                    <div className="container mt-2">
                        <h1 className="mb-3" style={{
                            fontFamily: "Inter, Sans-serif",
                            fontSize: "3rem"
                        }}>Profile Saya</h1 >
                        <Form>
                            <EmailField />
                            <OtherField />
                            <ResetPassword />
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
