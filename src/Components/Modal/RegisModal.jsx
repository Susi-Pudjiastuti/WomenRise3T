import { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo/Logo WomenRise3T.svg";
import styles from "./RegisModal.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cross from "../../assets/icon/close.svg"
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { BookingContext } from "../../Context/BookingContext";

function RegisModal({mentors}) {
  // untuk boleaan state modal
  const [modal, setModal] = useState(false);

  //state untuk cek jika form terisi atau tidak
  const [validated, setValidated] = useState(false);

  //mentorhsips and fetchMentorships function from context
  const { mentorships, fetchMentorships } = useContext(BookingContext);
  useEffect(() => {
    if (mentors) { // Ensure mentors data is available before calling
        fetchMentorships(mentors);
    }
  }, [mentors, fetchMentorships]);

  // console.log(mentorships);
  console.log(mentorships[0]);

  const [booking, setBooking] = useState([])

  const handleModal = () => {
    //set agar modal menjadi kebalikannya ketika diclick
    setModal(!modal);
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
                <Form.Control required type="email"/>
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
                <Form.Control type="text" as='textarea' required  />
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
                  value={mentors?.namaLengkap + " - " + mentors?.asalDaerah}
                />
              </Form.Group>

              
              <Form.Group className="mb-4 text-start" controlId="mentorship">
                <Form.Label>Kelas Mentorship</Form.Label>
                <Form.Select required aria-label="Default select example" className="mb-3">
                <option value="">Pilih jadwal mentorship</option>
                {Array.isArray(mentorships) ? (
                  mentorships.map((mentorship) => (
                    <option key={mentorship._id} value={mentorship._id}>
                      {/* {console.log(mentorship.tema)} */}
                      {mentorship.tema} - {mentorship.tanggal}
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

            <img src={cross} onClick={handleModal} className={styles.closeModal} style={{cursor: "pointer", width: "40px"}}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisModal;
