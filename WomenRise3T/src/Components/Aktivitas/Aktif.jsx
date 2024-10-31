// Aktif.jsx
import React, { useContext } from 'react';
import { ActivityContext } from '../../Context/ActivityContext';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Aktif = () => {
    const { activities, cancelActivity } = useContext(ActivityContext);

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Batalkan',
            text: "Apakah anda yakin ingin membatalkan mentorship ini?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya',
            cancelButtonText: 'Tidak',
        }).then((result) => {
            if (result.isConfirmed) {
                cancelActivity(id);
                Swal.fire(
                    'Dibatalkan!',
                    'Aktivitas telah dibatalkan.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="mt-4">
            <Row>
                {activities.length === 0 ? (
                    <Col>
                        <p>Tidak ada aktivitas yang aktif</p>
                    </Col>
                ) : (
                    activities.map(activity => (
                        <Col md={4} key={activity.id} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{activity.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Tanggal: {activity.date}</strong><br />
                                        <span>Waktu: {activity.time}</span>
                                    </Card.Text>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleCancel(activity.id)}
                                    >
                                        Batal
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
};

export default Aktif;