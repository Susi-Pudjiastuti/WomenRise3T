import { useState } from "react";
import logo from "../../assets/logo/Logo WomenRise3T.svg";
import styles from "./RegisModal.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cross from "../../assets/icon/close.svg"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function RegisModalCard({ mentor }) {
  const navigate = useNavigate()
  // untuk boleaan state modal
  const [modal, setModal] = useState(false);

  //state untuk cek jika form terisi atau tidak
  const [validated, setValidated] = useState(false);

  const [booking, setBooking] = useState({
    kelas: {
      jam: "",
      tanggal: "",
      judul: ""
    },
    mentor: {
      nama: "Cahaya Intan",
      daerah: "Maluku Utara"
    }

  })

  const handleModal = () => {
    //set agar modal menjadi kebalikannya ketika diclick
    if (!localStorage.token) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan Login Terlebih Dahulu",
      });
      navigate('/login');
      return
    }
    setModal(!modal)
  };

  // konfirmasi
  const handleConfirm = (e) => {
    e.preventDefault()
    const form = e.currentTarget;

    //cek jika form sudah terisi
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      Swal.fire({
        title: "Booking Berhasil!",
        text: "Anda telah terdaftar untuk sesi mentoring. Tunggu maksimal 1 x 24 jam anda akan  di-Invite ke WhatsApp Grup.",
        icon: "success"
      });
      setModal(!modal)
    }

    setValidated(true);

  }

  return (
    <div>
      {/* tombol "daftar sekarang" dari halaman detail mentor */}
      <button className="btn btn-primary" onClick={handleModal}> <i className="bi bi-check2-square"></i> Daftar Mentorship <i
        className="bi bi-arrow-right"></i></button>

      {/* Jika modal bernilai true, tampilkan modal */}
      {modal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={handleModal}></div>

          <div className={styles.modalContent}>
            <h3 className="mb-3 text-center vesper-libre-bold pt-2">
              <img src={logo} width="40" height="auto" /> WomenRise3T
            </h3>
            <p className="text-center">

              Mohon registrasi ulang data anda untuk melakukan booking
              mentoring.
            </p>

            <Form noValidate validated={validated} onSubmit={handleConfirm}>
              <Form.Group className="mb-3 text-start" controlId="inputNama">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  required
                  type="text" />
                <Form.Control.Feedback type="invalid">
                  Mohon isi data nama anda.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="inputEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" />
                <Form.Control.Feedback type="invalid">
                  Mohon isi data email anda.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="inputNomor">
                <Form.Label>Nomor Handphone (WA)</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">
                  Mohon isi nomor handphone anda.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="inputAlasan">
                <Form.Label>Alasan anda mendaftar mentorship ini</Form.Label>
                <Form.Control type="text" as='textarea' required />
                <Form.Control.Feedback type="invalid">
                  Mohon isi alasan anda.
                </Form.Control.Feedback>
              </Form.Group>

              {/* tambah value nanti untuk display data dari api */}
              <Form.Group className="mb-3 text-start" controlId="mentor">
                <Form.Label>Mentor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Disabled input"
                  aria-label="Disabled input example"
                  disabled
                  readOnly
                  value={mentor?.namaLengkap + " - " + mentor?.asalDaerah}
                />
              </Form.Group>


              <Form.Group className="mb-4 text-start" controlId="mentorship">
                <Form.Label>Kelas Mentorship</Form.Label>
                <Form.Select required aria-label="Default select example" className="mb-3">
                  <option value="">Pilih jadwal mentorship</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Mohon pilih kelasnya.
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary w-100 border-0"
                style={{ background: "#004987" }}

              >
                Book Jadwal Mentor
              </Button>
            </Form>

            <img src={cross} onClick={handleModal} className={styles.closeModal} style={{ cursor: "pointer", width: "40px" }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisModalCard;
