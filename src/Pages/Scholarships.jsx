import { useQuery } from "@tanstack/react-query"
import CardScholarship from "../Components/Scholarship/Card"
import { fetchScholarship } from "../utils/fetch"
import { Button, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Skeleton from 'react-loading-skeleton'

const Scholarships = () => {
  const navigate = useNavigate()
  const { isLoading, data } = useQuery({
    queryKey: ["scholarship"],
    queryFn: fetchScholarship
  })
  const scholarships = data?.data

  return (
    <>
      <div className='my-5 min-vh-100'>
        <h2 className='text-center text-blue' style={{ fontSize: '2rem', fontWeight: 'bold' }}>Scholarship Hunters</h2>
        <Container className="mt-5">
          <Button className="ms-3 mb-2 text-end " onClick={() => { navigate('/scholarships/add') }}>Tambah Beasiswa</Button>
          <Row>
            {isLoading ? (
              <>
                <Skeleton count={3} height={150} style={{ marginBottom: '1rem' }} />
              </>
            ) : (
              scholarships?.map((item, index) => <CardScholarship key={index} item={item} />)
            )}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Scholarships
