import { Container } from 'react-bootstrap';
import FormAdd from './Form';
import AddScholarshipSmall from './AddScholarshipSmall';
import IntroAdd from './IntroAdd';


const AddScholarship = () => {
  return (
    <>
      <Container className='my-5 d-none d-md-block w-50 '>
        <IntroAdd />
        <FormAdd />
      </Container>
      <AddScholarshipSmall />
    </>
  )
}

export default AddScholarship
