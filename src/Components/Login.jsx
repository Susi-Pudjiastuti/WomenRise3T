import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Girl from '../assets/Mask-group-1.webp';
import Logo from '../assets/Logo WomenRise3T.svg';
import { Link } from 'react-router-dom';


const Login = () => {
    // State untuk input form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); // State untuk loading
    const navigate = useNavigate();

    // Function untuk handle login
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple form validation
        if (!email || !password) {
            setErrorMessage('Email dan Password harus diisi!');
            return;
        }

        setLoading(true); // Set loading true saat request dimulai

        try {
            // mengirim data login ke backend pakai axios
            const response = await axios.post("https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/auth/login", {
                email: email,
                password: password,
            });

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));


            // Jika login berhasil
            if (response.status === 200) {
                setSuccessMessage('Login berhasil!');
                setErrorMessage('');
                // Arahkan user ke halaman landing page
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }
        } catch (error) {
            // Jika login gagal
            setErrorMessage('Login gagal, user tidak ditemukan!');
            setSuccessMessage('');
        } finally {
            setLoading(false); // Set loading false setelah request selesai
        }
    };

    return (
        <Container fluid className="login-container vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F6FBFD' }}>
            <Row className="w-100 align-items-center" style={{ backgroundColor: '#FFF', height: '100vh', objectFit: 'cover', marginLeft: '70px', marginRight: '70px' }}>
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-stretch">
                    <img src={Girl} alt="Login" className="img-fluid d-none d-md-block" style={{ height: '100vh', objectFit: 'cover' }} />
                </Col>

                <Col md={6} className="px-5">
                    <Link to="/">
                        <h3 className="mb-5 text-center" style={{ fontFamily: 'Vesper Libre, serif', fontSize: '2rem', fontWeight: 'bold', color: 'black' }}>
                            <img src={Logo} width="65px" height="55px" alt="Logo" />
                            WomenRise3T
                        </h3>
                    </Link>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="masukkan email anda"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading} // Disable input saat loading
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 w-100">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="masukkan password anda"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading} // Disable input saat loading
                            />
                        </Form.Group>
                        <Button onClick={handleSubmit} type="submit" className="btn-primary w-100" style={{ fontWeight: 'bold' }} disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner animation="border" size="sm" className="me-2" />
                                    Logging In...
                                </>
                            ) : (
                                'Log In'
                            )}
                        </Button>
                    </Form>

                    <div className="mt-3 text-center">
                        <span>Belum punya akun?</span> <Link to="/signup">Sign up</Link>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Login;
