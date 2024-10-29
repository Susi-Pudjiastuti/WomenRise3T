import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import Girl from '../assets/Mask-group-1.webp';
import Logo from '../assets/Logo WomenRise3T.svg';
import { GoUpload } from "react-icons/go";

const Signup = () => {
    const [formData, setFormData] = useState({
        nama: "",
        asalDaerah: "",
        email: "",
        password: "",
        confirmPassword: "",
        fileUrl: "", // URL file setelah upload ke Cloudinary
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Untuk handle loading saat upload

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
            const fileUrl = response.data.secure_url; // URL gambar dari Cloudinary
            setFormData((prevData) => ({ ...prevData, fileUrl })); // Simpan URL ke state
        } catch (error) {
            console.error("Upload ke Cloudinary gagal", error);
        } finally {
            setLoading(false);
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
            nama: formData.nama,
            asalDaerah: formData.asalDaerah,
            email: formData.email,
            password: formData.password,
            fileUrl: formData.fileUrl, // URL gambar yang sudah diupload ke Cloudinary
        };

        try {
            const response = await axios.post(
                "https://api.com/signup", // Ganti dengan URL API backend
                dataToSend
            );
            console.log("Signup successful", response.data);
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <Container fluid className="login-container vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F6FBFD' }}>
            <Row className="w-100 align-items-center" style={{ backgroundColor: '#FFF', height: '100vh', objectFit: 'cover', marginLeft: '70px', marginRight: '70px' }}>
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-stretch">
                    <img src={Girl} alt="Login" className="img-fluid d-none d-md-block" style={{ height: '115vh', objectFit: 'cover' }} />
                </Col>
                <Col md={6} className="px-5">
                    <h3 className="text-center" style={{ fontFamily: 'Vesper Libre, serif', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <img src={Logo} width="65px" height="55px" alt="Logo" />
                        WomenRise3T
                    </h3>
                    <Form onSubmit={handleSubmit}>
                        {/* Input Nama */}
                        <Form.Group className="mb-1" controlId="nama">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                placeholder="Masukkan Nama"
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
                                <option value="wilayah1">Wilayah 1</option>
                                <option value="wilayah2">Wilayah 2</option>
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

                        {/* Upload Kartu Identitas */}
                        <Form.Group className="mb-1">
                            <Form.Label>Upload foto KTP/KK/Kartu Pelajar</Form.Label>
                            <div
                                {...getRootProps()}
                                className="dropzone-box rounded-3"
                                style={{
                                    border: "1.5px dashed #004987",
                                    padding: "20px",
                                    textAlign: "center",
                                    marginBottom: "20px",
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
                                ) : formData.fileUrl ? (
                                    // Jika file berhasil diupload, tampilkan link file
                                    <div>
                                        <p>
                                            File berhasil diupload:{" "}
                                            <a
                                                href={formData.fileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Lihat File
                                            </a>
                                        </p>
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
                        </Form.Group>

                        {/* Button Submit */}
                        <Button type="submit" className="btn-primary w-100" style={{ fontWeight: 'bold' }}>
                            Sign Up
                        </Button>
                    </Form>

                    <div className="mt-3 text-center">
                        <span>Sudah punya akun? <a href="#" >Log in</a></span>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Signup;
