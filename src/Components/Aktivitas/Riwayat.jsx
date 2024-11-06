
import React, { useContext, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BookingContext } from '../../Context/BookingContext';
import { BsCalendar, BsClock } from 'react-icons/bs';


const Riwayat = () => {
    const { bookings, getBookings } = useContext(BookingContext);
    const mentorshipStatus = false;
    useEffect(() => {
        if (bookings) { // Ensure mentors data is available before calling
            getBookings(mentorshipStatus)
        }

    }, []);

    console.log("Bookings in riwayat component:", bookings);



    return (
        <div>
            {bookings.length === 0 ? (
                <p>Tidak ada riwayat</p>
            ) : (
                bookings.map(booking => (
                    <Card key={booking._id} className="my-3">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs={12} md={3}>
                                    <span>{booking.mentorship.mentor}</span>
                                </Col>
                                <Col xs={12} md={3} className="d-flex align-items-center">
                                    <BsCalendar className="me-2" />
                                    <span>{new Date(booking.mentorship.tanggal).toLocaleDateString()}</span>
                                </Col>
                                <Col xs={12} md={4} className="d-flex align-items-center">
                                    <BsClock className="me-2" />
                                    <span>{booking.mentorship.jam}</span>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
};

export default Riwayat;