// Aktif.jsx
import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { BookingContext } from '../../Context/BookingContext';
import { BsCalendar, BsClock } from 'react-icons/bs';
import { format } from "date-fns";

const Aktif = () => {
    const { bookings, deleteBooking, getBookings } = useContext(BookingContext);

    useEffect(() => {
        getBookings(true);
    }, []);

    console.log("aktif component:", bookings);

    const handleCancel = async (bookingId) => {
        const result = await Swal.fire({
            title: 'Batalkan',
            text: "Apakah anda yakin ingin membatalkan mentorship ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
        });

        if (result.isConfirmed) {
            const success = await deleteBooking(bookingId);

            if (success) {
                Swal.fire(
                    'Dibatalkan!',
                    'Aktivitas telah dibatalkan.',
                    'success'
                );
            } else {
                Swal.fire(
                    'Gagal!',
                    'Terjadi kesalahan saat membatalkan aktivitas.',
                    'error'
                );
            }
        }
    };

    return (
        <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
            {bookings.length === 0 ? (
                <p>Tidak ada aktivitas yang aktif</p>
            ) : (
                bookings.map(booking => (
                    <Card key={booking._id} className="m-3 pe-4">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col xs={12} md={2}>
                                    <span>{booking.mentorship.mentor.namaLengkap}</span> {/* Menampilkan nama mentor */}
                                </Col>
                                <Col xs={12} md={3}>
                                    <span>{booking?.mentorship.tema}</span>
                                </Col>
                                <Col xs={12} md={3} className="d-flex align-items-center">
                                    <BsCalendar className="me-2" />
                                    <span>{format(booking.mentorship.tanggal, "dd MMMM yyyy")}</span> {/* Menampilkan tanggal */}
                                </Col>
                                <Col xs={12} md={3} className="d-flex align-items-center">
                                    <BsClock className="me-2" />
                                    <span>{booking.mentorship.jam}</span> {/* Menampilkan jam */}
                                </Col>
                                <Col xs={12} md={1} className="text-md-end">
                                    <Button variant="danger" onClick={() => handleCancel(booking._id)}>Batal</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
};

export default Aktif;