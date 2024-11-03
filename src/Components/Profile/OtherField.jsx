
import React from 'react';
import { Form } from 'react-bootstrap';
import { useUser } from '../../Context/UserContext';

const OtherField = () => {
    const { user } = useUser();

    return (
        <>
            <Form.Group controlId="formName" className="mb-2">
                <Form.Label style={{ fontFamily: 'Inter, Sans-Serif', fontSize: '1rem' }}>Nama</Form.Label>
                <Form.Control style={{ fontFamily: 'Inter, Sans-Serif', fontSize: '0.9rem', color: 'gray', backgroundColor: '#F6FBFD' }}
                    type="text"
                    value={user.namaLengkap}
                    readOnly
                />
            </Form.Group>

            <Form.Group controlId="formAsalDaerah" className="mb-2">
                <Form.Label style={{ fontFamily: 'Inter, Sans-Serif', fontSize: '1rem' }}>Asal Daerah</Form.Label>
                <Form.Control style={{ fontFamily: 'Inter, Sans-Serif', fontSize: '0.9rem', color: 'gray', backgroundColor: '#F6FBFD' }}
                    type="text"
                    value={user.asalDaerah}
                    readOnly
                />
            </Form.Group>
        </>
    );
};

export default OtherField;
