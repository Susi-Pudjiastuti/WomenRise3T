import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo/Logo WomenRise3T.svg";
import styles from "./RegisModal.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cross from "../../assets/icon/close.svg"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../../Context/BookingContext";

function RegisModalCard({ mentor }) {
  const navigate = useNavigate()
  // untuk boleaan state modal
  const [modal, setModal] = useState(false);

  //state untuk cek jika form terisi atau tidak
  const [validated, setValidated] = useState(false);

  // console.log(mentor)
  //mentorhsips and fetchMentorships function from context============================
  const { mentorships, fetchMentorships } = useContext(BookingContext);

  //booking
  const {addBooking} = useContext(BookingContext)
  const [booking, setBooking] = useState({
    namaPendaftar: "",
    emailPendaftar: "",
    noHp: "",
    alasanMendaftar: "",
    mentorship: ""
  });

  const handleModal = () => {
    //set agar modal menjadi kebalikannya ketika diclick
    fetchMentorships(mentor) //fetch mentorship untuk setiap mentor
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

   //format penulisan tanggal di dlm option ===========================================
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
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
      // console.log(booking)
      addBooking(booking)
      setModal(!modal)
    }
    setValidated(true);
  }

  //handle change======================================================================
  function handleChange(event) {
    console.log(event.target.name, event.target.value); 
    setBooking({
      ...booking, 
      [event.target.name]: event.target.value
    })
  }
  
  return (
    <div>
      {/* tombol "daftar sekarang"  */}
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
                 name="namaPendaftar"
                 type="text" 
                 onChange={handleChange}/>
                <Form.Control.Feedback type="invalid">
                  Mohon isi data nama anda.
                </Form.Control.Feedback>
              </Form.Group>

              {/* input email */}
              <Form.Group className="mb-3 text-start" controlId="inputEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required 
                  name="emailPendaftar"
                  type="email" 
                  onChange={handleChange}
                  />
                <Form.Control.Feedback type="invalid">
                  Mohon isi data email anda.
                </Form.Control.Feedback>
              </Form.Group>

              {/* input nomor hp */}
              <Form.Group className="mb-3 text-start" controlId="inputNomor">
                <Form.Label>Nomor Handphone (WA)</Form.Label>
                <Form.Control required 
                  name="noHp"
                  type="text" 
                  onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  Mohon isi nomor handphone anda.
                </Form.Control.Feedback>
              </Form.Group>

              {/* input alasan */}
              <Form.Group className="mb-3 text-start" controlId="inputAlasan">
                <Form.Label>Alasan anda mendaftar mentorship ini</Form.Label>
                <Form.Control type="text" 
                  as="textarea" 
                  onChange={handleChange}
                  name="alasanMendaftar"
                  required />
                <Form.Control.Feedback type="invalid">
                  Mohon isi alasan anda.
                </Form.Control.Feedback>
              </Form.Group>

              {/* mentor */}
              <Form.Group className="mb-3 text-start" controlId="mentor">
                <Form.Label>Mentor</Form.Label>
                <Form.Control
                  name="mentor"
                  type="text"
                  placeholder="Disabled input"
                  aria-label="Disabled input example"
                  disabled
                  readOnly
                  value={mentor?.namaLengkap + " - " + mentor?.asalDaerah}
                />
              </Form.Group>

              {/* drop down mentorship class */}
              <Form.Group className="mb-4 text-start" controlId="mentorship">
                <Form.Label>Kelas Mentorship</Form.Label>
                <Form.Select required
                    aria-label="Default select example"
                    className="mb-3"
                    name="mentorship"
                    onChange={handleChange}>
                  <option value="">Pilih jadwal mentorship</option>
                  
                  {Array.isArray(mentorships) ? (
                    mentorships.map((mentorship) => (
                      <option key={mentorship._id} value={mentorship._id}>
                        {formatDate(mentorship.tanggal)} | {mentorship.jam} |{" "}
                        {mentorship.tema} | Sisa slot: {mentorship.slot}
                      </option>
                    ))
                  ) : (
                    <option disabled>Data not available</option>
                  )}
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
