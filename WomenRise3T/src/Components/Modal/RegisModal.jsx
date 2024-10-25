import logo from '../../assets/logo/Logo WomenRise3T.svg'
import styles from './RegisModal.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisModal() {
  return (
    <div>
      {/* tombol daftar sekarang dari halaman detail mentor */}
        <button>Daftar sekarang</button>

      <div className={styles.modal}>
          <div className={styles.overlay}></div>

          <div className={styles.modalContent}>
            <h3 class="mb-3 text-center vesper-libre-bold pt-2"><img src={logo} width="40" height="auto"/> WomenRise3T</h3>
            <p> Mohon registrasi ulang data anda untuk melakukan booking mentoring. </p>

            <Form >

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              </Form.Group>
              <Button variant="primary" type="submit" className='btn btn-primary w-100 border-0' style={{background: '#004987'}}>
                Book Jadwal Mentor
              </Button>
            </Form>
            
          </div>
      </div>
       
    </div>
  )
}

export default RegisModal