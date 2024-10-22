import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Girl from '../assets/Mask-group-1.webp';
import Logo from '../assets/Logo WomenRise3T.svg'

const Login = () => {
    return (
        <Container fluid className="login-container vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F6FBFD' }}>
            <Row className="w-100 align-items-center" style={{ backgroundColor: '#FFF', height: '100vh', objectFit: 'cover', marginLeft: '70px', marginRight: '70px' }}>
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-stretch">
                    <img src={Girl} alt="Login" className="img-fluid d-none d-md-block" style={{ height: '100vh', objectFit: 'cover' }} />
                </Col>
                <Col md={6} >
                    <div className="p-5">
                        <h3 className="mb-4 text-center">
                            <img src={Logo} width="65px" height="55px" alt="Logo" />
                            WomenRise3T
                        </h3>
                        <Form>
                            <Form.Group className="mb-3 w-100 ">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="masukkan email anda" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-100">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="masukkan password anda" />
                            </Form.Group>
                            <Button type="submit" className=" btn-primary w-100">
                                Log In
                            </Button>
                        </Form>
                        <div className="mt-3 text-center">
                            <span>Belum punya akun? <a href="#" className="primary-link">Sign up</a></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
