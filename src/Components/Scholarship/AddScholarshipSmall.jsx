import { Container } from 'react-bootstrap';
import FormAdd from './Form';
import IntroAdd from './IntroAdd';


const AddScholarshipSmall = () => {

  return (
    <Container className='my-5 d-block d-md-none '>
      <IntroAdd />
      <FormAdd />
    </Container>
  )
}

export default AddScholarshipSmall
