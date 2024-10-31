import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import About from '../../assets/about.svg';

const AboutSection = () => {
    return (
        <Row className="justify-content-center">
            <Col md={6}>
                <h3 className="mb-3" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#004987' }}>WomenRise3T</h3>
                <p>
                    WomenRise3T adalah sebuah platform yang berfokus pada pemberdayaan perempuan marjinal di wilayah 3T (terdepan, terluar, tertinggal) Indonesia melalui program mentorship beasiswa 3T. Kami hadir untuk memberikan bimbingan dan dukungan kepada perempuan yang bercita-cita melanjutkan pendidikan tinggi, meskipun mereka berada dalam keterbatasan akses dan kesempatan karena motto kami “Dari 3T, Untuk 3T”.
                </p>
                <p>
                    Di WomenRise3T, kami berkomitmen untuk menciptakan peluang yang setara bagi setiap perempuan, terlepas dari latar belakang dan lokasi geografis mereka. Bersama-sama, kami membangun masa depan yang lebih baik dengan mendukung generasi perempuan pemimpin yang tangguh, cerdas, dan siap mengubah dunia.
                </p>
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
                <Image src={About} fluid rounded />
            </Col>
        </Row>
    );
};

export default AboutSection;
