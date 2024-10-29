import React from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';


const NotLoggedIn = () => {
    return (
        <Container fluid style={{ fontFamily: 'Inter, Sans-serif' }}>
            <Row className="justify-content-center">
                <Col xs={12} className="p-4" style={{ backgroundColor: '#F6FBFD' }}>
                    <Card className="text-center rounded-3 border-0 m-4" style={{ backgroundColor: '#fff' }}>
                        <Card.Body className="p-5">
                            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#004987' }}>
                                Mentoring Beasiswa Perempuan 3T
                            </Card.Title>
                            <Card.Text className=" text-black-50">
                                Bergabunglah dengan sesi mentoring khusus untuk Perempuan wilayah 3T!<br />
                                Dapatkan bimbingan dari mentor berpengalaman dan wujudkan impianmu meraih beasiswa.<br />
                                Daftar sekarang, kesempatan terbatas!
                            </Card.Text>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" className="me-2">Log In</Button>
                                <Button variant="secondary">Sign Up</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default NotLoggedIn;


