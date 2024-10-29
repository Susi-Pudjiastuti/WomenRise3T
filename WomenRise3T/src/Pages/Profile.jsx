import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiEdit2Line } from "react-icons/ri";
import { Form, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Components/Sidebar';

const Profile = () => {
    const [user, setUser] = useState({ email: '', name: '', address: '' });

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://api/user');
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user data', error);
            Swal.fire('Error', 'Failed to fetch user data', 'error');
        }
    };

    const handlePasswordReset = async (newPassword) => {
        try {
            await axios.put('https://api/user/password', { password: newPassword });
            Swal.fire('Success', 'Password updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating password', error);
            Swal.fire('Error', 'Failed to update password', 'error');
        }
    };

    const handleEmailReset = async (newEmail) => {
        try {
            await axios.put('https://api/user/email', { email: newEmail });
            setUser({ ...user, email: newEmail });
            Swal.fire('Success', 'Email updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating email', error);
            Swal.fire('Error', 'Failed to update email', 'error');
        }
    };

    const openPasswordModal = () => {
        Swal.fire({
            title: 'Ganti Password',
            html: `
            <style> .swal2-input {
                    width: 75%;
                    box-sizing: border-box;
                }
            </style>
            <input id="password" class="swal2-input" placeholder="Password Baru" type="password">
            <input id="confirmPassword" class="swal2-input" placeholder="Masukkan lagi password baru" type="password">
            `,
            confirmButtonText: 'Selesai',
            showCloseButton: true,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const password = Swal.getPopup().querySelector('#password').value;
                const confirmPassword = Swal.getPopup().querySelector('#confirmPassword').value;

                if (!password || !confirmPassword) {
                    Swal.showValidationMessage('Semua harus diisi');
                    return false;
                }

                if (password !== confirmPassword) {
                    Swal.showValidationMessage('Password tidak cocok');
                    return false;
                }

                return password;
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                handlePasswordReset(result.value);
            }
        });
    };
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
        <Container fluid className=" vh-100 d-flex justify-content-center align-items-center">
            <Row className="w-100 align-items-center" style={{ objectFit: 'cover', marginLeft: '70px', marginRight: '70px' }}>
                <Col md={4} className="d-none d-md-flex justify-content-center align-items-stretch">
                    <Sidebar />
                </Col>
                <Col>
                    <div className="container mt-2" style={{ fontFamily: "Inter, Sans-serif" }}>
                        <h1 className="mb-5" >Profile Saya</h1>
                        <Form >
                            <Form.Group controlId="formEmail" className="mb-2">
                                <Form.Label>E-mail</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="email"
                                        value={user.email}
                                        readOnly
                                    />
                                    <Button
                                        variant="outline-secondary"
                                        onClick={openEmailModal}
                                        title="Edit Email"
                                    >
                                        <RiEdit2Line />
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formName" className="mb-2">
                                <Form.Label>Nama</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={user.name}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group controlId="formAddress" className="mb-2">
                                <Form.Label>Asal Daerah</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={user.address}
                                    readOnly
                                />
                            </Form.Group>

                            <a style={{ color: "#004987" }} onClick={openPasswordModal}>
                                Reset Password
                            </a>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;