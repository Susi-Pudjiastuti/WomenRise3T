import React from "react"
import Sidebar from "../Components/Sidebar"
import { Col, Row, Container } from "react-bootstrap"
import { Tabs, Tab } from 'react-bootstrap';
import Aktif from '../Components/Aktivitas/Aktif';
import Riwayat from '../Components/Aktivitas/Riwayat';

function Aktivitas() {

    return (
        <Container fluid className="d-flex justify-content-center align-items-center">
            <Row className="w-100 align-items-start" style={{ margin: '0 15px' }}>
                <Col md={4} className="d-md-flex justify-content-center align-items-stretch mb-3">
                    <Sidebar />
                </Col>
                <Col md={8} xs={12}>
                    <div className="container mt-2">
                        <h1>Aktivitas Mentorship</h1>
                        <p>Aktivitas Mentorship yang telah anda daftar</p>

                        <Tabs defaultActiveKey="aktif" variant="underline" className="mt-3">
                            <Tab eventKey="aktif" title="Aktif">
                                <Aktif />
                            </Tab>
                            <Tab eventKey="riwayat" title="Riwayat">
                                <Riwayat />
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Aktivitas;