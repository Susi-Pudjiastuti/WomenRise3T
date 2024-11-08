import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addScholarship } from '../../utils/fetch';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';

const FormAdd = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [input, setInput] = useState({
    namaUniversitas: "",
    gambar: "",
    linkBeasiswa: "",
    tanggal: "",
    daerahKhusus: "",
    nama: "",
    email: ""
  })
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value })

  }

  const addScholarshipMutation = useMutation({
    mutationFn: addScholarship,
    onSuccess: () => {
      Swal.fire({
        title: "Good job!",
        text: "Success add data to scholarship!",
        icon: "success"
      });
      navigate('/scholarships')
      queryClient.invalidateQueries({ queryKey: ["scholarship"] })
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Pastikan data yang diisi sudah lengkap dan sesuai`,
      });
    }
  })

  const handleAddScholarship = (e) => {
    e.preventDefault();
    console.log(input)
    addScholarshipMutation.mutate({ input });
  }
  return (
    <Form onSubmit={handleAddScholarship}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nama Universitas Penyelenggara/ Program Beasiswa</Form.Label>
        <Form.Control name="namaUniversitas" type="text" placeholder="Universitas/ Program Beasiswa" onChange={handleInput} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Gambar</Form.Label>
        <Form.Control name="gambar" type="text" placeholder="Link Url Gambar / Logo Universitas" onChange={handleInput} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Link Beasiswa</Form.Label>
        <Form.Control name="linkBeasiswa" type="text" placeholder="Link Url Beasiswa" onChange={handleInput} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Deadline Pendaftaran</Form.Label>
        <Form.Control name="tanggal" type="date" onChange={handleInput} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSelect">
        <Form.Label>Kategori</Form.Label>
        <Form.Select aria-label="Default select example" name="daerahKhusus" onChange={handleInput} required >
          <option>Open this select menu</option>
          <option value="Kuota Khusus 3T">Daerah Khusus 3T</option>
          <option value="Nasional">Nasional</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasitexts">
        <Form.Label>Data volunteer WomenRise3T</Form.Label>
        <Form.Control name="nama" type="text" onChange={handleInput} placeholder="Nama Lengkap" className='mb-3' required />
        <Form.Control name="email" type="email" onChange={handleInput} placeholder="Email yang terdaftar di WomenRise3T" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormAdd
