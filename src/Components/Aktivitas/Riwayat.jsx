// Riwayat.jsx
import React, { useContext } from 'react';
import { ActivityContext } from '../../Context/ActivityContext';
import { Card, Col, Row, Badge } from 'react-bootstrap';

const Riwayat = () => {
    const { history } = useContext(ActivityContext);

    return (
        <div className="mt-4">
            <Row>
                {history.length === 0 ? (
                    <Col>
                        <p>Tidak ada riwayat aktivitas</p>
                    </Col>
                ) : (
                    history.map(activity => (
                        <Col md={4} key={activity.id} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{activity.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Tanggal: {activity.date}</strong><br />
                                        <span>Waktu: {activity.time}</span><br />
                                        <Badge bg={activity.status === 'cancelled' ? 'danger' : 'success'}>
                                            {activity.status === 'cancelled' ? 'Dibatalkan' : 'Selesai'}
                                        </Badge>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
};

export default Riwayat;