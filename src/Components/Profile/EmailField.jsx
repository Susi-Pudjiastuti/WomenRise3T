
import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { RiEdit2Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import { useUser } from '../../Context/UserContext';

const EmailField = () => {
    const { user, handleEmailReset } = useUser();

    const openEmailModal = () => {
        Swal.fire({
            title: 'Ganti Email',
            input: 'email',
            inputPlaceholder: 'Email Baru',
            inputAttributes: {
                autocapitalize: 'off',
                autocorrect: 'off'
            },
            confirmButtonText: 'Selesai',
            showCloseButton: true,
            showLoaderOnConfirm: true,
            preConfirm: (email) => {
                if (!email) {
                    Swal.showValidationMessage('Email is required');
                } else {
                    return handleEmailReset(email);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        });
    };

    return (
        <Form.Group controlId="formEmail" className="mb-2">
            <Form.Label style={{ fontFamily: 'Inter, Sans-Serif', fontSize: '1rem' }}>E-mail</Form.Label>
            <InputGroup>
                <Form.Control style={{ fontFamily: 'Inter, Sans-Serif', fontSize: '0.9rem', color: 'gray', backgroundColor: '#F6FBFD' }}
                    type="email"
                    value={user.email}
                    readOnly
                />
                <Button style={{ color: 'gray', backgroundColor: '#F6FBFD', borderLeft: "0", borderColor: '#d4d9d5' }}
                    onClick={openEmailModal}
                    title="Edit Email"
                >
                    <RiEdit2Line />
                </Button>
            </InputGroup>
        </Form.Group>
    );
};

export default EmailField;