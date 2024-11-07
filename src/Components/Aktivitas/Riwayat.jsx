
import React, { useContext, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BookingContext } from '../../Context/BookingContext';
import { BsCalendar, BsClock } from 'react-icons/bs';


const Riwayat = () => {
    const { bookingsFalse, getBookings } = useContext(BookingContext);
    useEffect(() => {
        getBookings()
    }, []);

    console.log("bookingsFalse in riwayat component:", bookingsFalse);



    return (
        <div>
            {bookingsFalse.length === 0 ? (
                <p>Tidak ada riwayat</p>
            ) : (
                bookingsFalse.map(booking => (
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