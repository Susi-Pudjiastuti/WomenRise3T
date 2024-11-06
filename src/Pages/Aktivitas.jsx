import React, { useContext } from "react"
import Sidebar from "../Components/Sidebar"
import { Col, Row, Container } from "react-bootstrap"
import { ActivityProvider } from '../Context/ActivityContext';
import { Tabs, Tab } from 'react-bootstrap';
import Aktif from '../Components/Aktivitas/Aktif';
import Riwayat from '../Components/Aktivitas/Riwayat';
import { BookingContext } from "../Context/BookingContext";

function Aktivitas() {
    const { bookings } = useContext(BookingContext);
    console.log(bookings)
    return (
        <>
            <div>
                <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
                    <Row className="w-100 align-items-center" style={{ objectFit: 'cover', marginLeft: '70px', marginRight: '70px' }}>
                        <Col md={4} className=" d-md-flex justify-content-center align-items-stretch">
                            <Sidebar />
                        </Col>
                        <Col>
                            <div className="container mt-2" style={{ fontFamily: "Inter, Sans-serif" }}>
                                <h1>Aktivitas Mentorship</h1>
                                <p>Aktivitas Mentorship yang telah anda daftar</p>
                                <ActivityProvider>
                                    <Tabs defaultActiveKey="aktif" >
                                        <Tab eventKey="aktif" title="Aktif">
                                            <Aktif />
                                        </Tab>
                                        <Tab eventKey="riwayat" title="Riwayat">
                                            <Riwayat />
                                        </Tab>
                                    </Tabs>
                                </ActivityProvider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Aktivitas