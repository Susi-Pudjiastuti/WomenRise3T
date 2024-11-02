import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import Girl from '../assets/Mask-group-1.webp';
import Logo from '../assets/Logo WomenRise3T.svg';
import { GoUpload } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        namaLengkap: "",
        asalDaerah: "",
        email: "",
        password: "",
        confirmPassword: "",
        avatar: "",
        kartuIdentitas: "", // URL file setelah upload ke Cloudinary
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Untuk handle loading saat upload
    const [avatarLoading, setAvatarLoading] = useState(false);

    // Handle file drop menggunakan Dropzone
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: async (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                await handleUploadToCloudinary(file); // Upload file ke Cloudinary
            }
        },
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/svg+xml": [".svg"],
        },
    });

    // Upload file ke Cloudinary
    const handleUploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dnrcfcjm"); // preset dari Cloudinary
        setLoading(true);
        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dsdzpyznj/image/upload", // URL API Cloudinary
                formData
            );
            const kartuIdentitas = response.data.secure_url; // URL gambar dari Cloudinary
            setFormData((prevData) => ({ ...prevData, kartuIdentitas })); // Simpan URL ke state
        } catch (error) {
            console.error("Upload ke Cloudinary gagal", error);
        } finally {
            setLoading(false);
        }
    };

    const { getRootProps: getAvatarRootProps, getInputProps: getAvatarInputProps } = useDropzone({
        onDrop: async (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                await handleUploadAvatar(file); // Upload file ke Cloudinary
            }
        },
        accept: {
            "image/jpeg": [".jpg", ".jpeg"],
            "image/png": [".png"],
            "image/svg+xml": [".svg"],
        },
    });

    // Upload file avatar ke Cloudinary
    const handleUploadAvatar = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dnrcfcjm"); // preset dari Cloudinary
        setAvatarLoading(true);
        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dsdzpyznj/image/upload", // URL API Cloudinary
                formData
            );
            const avatar = response.data.secure_url; // URL gambar dari Cloudinary
            setFormData((prevData) => ({ ...prevData, avatar })); // Simpan URL ke state
        } catch (error) {
            console.error("Upload ke Cloudinary gagal", error);
        } finally {
            setAvatarLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setErrors({ confirmPassword: "Password harus sama dengan sebelumnya" });
            return;
        }

        const dataToSend = {
            namaLengkap: formData.namaLengkap,
            asalDaerah: formData.asalDaerah,
            email: formData.email,
            password: formData.password,
            kartuIdentitas: formData.kartuIdentitas, // URL gambar yang sudah diupload ke Cloudinary
            avatar: formData.avatar
        };

        try {
            const response = await axios.post(
                "http://localhost:3000/auth/regis", // Ganti dengan URL API backend
                dataToSend
            );
            console.log("Signup successful", response.data);
            navigate('/login');
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <Container fluid className="login-container vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F6FBFD' }}>
            <Row className="w-100 align-items-center" style={{ backgroundColor: '#FFF', height: '100vh', objectFit: 'cover', marginLeft: '70px', marginRight: '70px' }}>
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-stretch">
                    <img src={Girl} alt="Login" className="img-fluid d-none d-md-block" style={{ height: '135vh', objectFit: 'cover' }} />
                </Col>
                <Col md={6} className="px-5">
                    <h3 className="text-center" style={{ fontFamily: 'Vesper Libre, serif', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <img src={Logo} width="65px" height="55px" alt="Logo" />
                        WomenRise3T
                    </h3>
                    <Form onSubmit={handleSubmit}>
                        {/* Input Nama */}
                        <Form.Group className="mb-1" controlId="namaLengkap">
                            <Form.Label>Nama Lengkap </Form.Label>
                            <Form.Control
                                type="text"
                                name="namaLengkap"
                                value={formData.namaLengkap}
                                onChange={handleChange}
                                placeholder="Masukkan Nama Lengkap"
                            />
                        </Form.Group>

                        {/* Dropdown Asal Daerah */}
                        <Form.Group className="mb-1 " controlId="asalDaerah">
                            <Form.Label>Asal Daerah</Form.Label>
                            <Form.Control style={{ cursor: 'pointer' }}
                                as="select"
                                name="asalDaerah"
                                value={formData.asalDaerah}
                                onChange={handleChange}
                            >
                                <option value="">Pilih Asal Daerah</option>
                                <option value="wilayah1">Maluku</option>
                                <option value="wilayah2">Papua</option>
                            </Form.Control>
                        </Form.Group>

                        {/* Input Email */}
                        <Form.Group className="mb-1" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Masukkan Email"
                            />
                        </Form.Group>

                        {/* Input Password */}
                        <Form.Group className="mb-1" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Masukkan Password"
                            />
                        </Form.Group>

                        {/* Input Konfirmasi Password */}
                        <Form.Group className="mb-1" controlId="confirmPassword">
                            <Form.Label>Konfirmasi Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Masukkan Konfirmasi Password"
                            />
                            {errors.confirmPassword && (
                                <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                            )}
                        </Form.Group>

                        {/* Upload Foto Diri */}
                        <Form.Group className="mb-1">
                            <Form.Label>Upload Foto Diri</Form.Label>
                            <div
                                {...getAvatarRootProps()}
                                className="dropzone rounded-3"
                                style={{
                                    border: "1.5px dashed #004987",
                                    padding: "3px",
                                    textAlign: "center",
                                    marginBottom: "3px",
                                }}
                            >
                                <input {...getAvatarInputProps()} />
                                {avatarLoading ? (
                                    <div>
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                        <p>Uploading file...</p>
                                    </div>
                                ) : (
                                    <div>
                                        <GoUpload />
                                        <p> Drag and Drop or <a style={{ color: "blue", cursor: "pointer" }}>choose your file</a> for upload <br />
                                            <small>JPG, PNG, or SVG</small>
                                        </p>
                                    </div>
                                )}
                            </div>
                            {formData.avatar && (
                                <p>
                                    File berhasil diupload:{" "}
                                    <a
                                        href={formData.avatar}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lihat File
                                    </a>
                                </p>
                            )}
                        </Form.Group>

                        {/* Upload Kartu Identitas */}
                        <Form.Group className="mb-1">
                            <Form.Label>Upload foto KTP/KK/Kartu Pelajar</Form.Label>
                            <div
                                {...getRootProps()}
                                className="dropzone-box rounded-3"
                                style={{
                                    border: "1.5px dashed #004987",
                                    padding: "10px",
                                    textAlign: "center",
                                    marginBottom: "10px",
                                }}
                            >
                                <input {...getInputProps()} />
                                {/* Jika loading, tampilkan spinner */}
                                {loading ? (
                                    <div>
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                        <p>Uploading file...</p>
                                    </div>
                                ) : (
                                    <div>
                                        <GoUpload />
                                        <p> Drag and Drop or <a style={{ color: "blue", cursor: "pointer" }}>choose your file</a> for upload <br />
                                            <small>JPG, PNG, or SVG</small>
                                        </p>
                                    </div>
                                )

                                }
                            </div>
                            {formData.kartuIdentitas && (
                                <p>
                                    File berhasil diupload:{" "}
                                    <a
                                        href={formData.kartuIdentitas}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lihat File
                                    </a>
                                </p>
                            )}
                        </Form.Group>

                        {/* Button Submit */}
                        <Button type="submit" className="btn-primary w-100" style={{ fontWeight: 'bold' }}>
                            Sign Up
                        </Button>
                    </Form>

                    <div className="mt-3 text-center">
                        <span>Belum punya akun? <Link to="/login">Log In</Link></span>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Signup;
