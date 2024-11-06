// Riwayat.jsx
import React, { useContext, useEffect } from 'react';
import { ActivityContext } from '../../Context/ActivityContext';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import { BookingContext } from '../../Context/BookingContext';

const Riwayat = () => {
    const { history } = useContext(ActivityContext);
    const { bookings, getBookings } = useContext(BookingContext);
    const mentorshipStatus = false

    useEffect(() => {
        if (bookings) { // Ensure mentors data is available before calling
            getBookings(mentorshipStatus)
            
        }
    
    }, []);

    console.log("Bookings in riwayat component:", bookings);


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