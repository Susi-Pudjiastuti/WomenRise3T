import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { format } from "date-fns";
import { Col } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteScholarship } from '../../utils/fetch';


function CardScholarship({ item }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const queryClient = useQueryClient()
  const id = item?._id

  const DeleteScholarshipMutation = useMutation({
    mutationFn: deleteScholarship,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scholarship"] })
      Swal.fire({
        title: "Good job!",
        text: "Success delete data scholarship!",
        icon: "success"
      });
    },
    onError: (error) => {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.message}`,
      });
    }
  })

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault()
    DeleteScholarshipMutation.mutate({ id })
  }
  return (
    <Col sm={1} md={3} >
      <a href={item?.linkBeasiswa} className="btn" target="_blank">
        <Card style={{ width: '15rem', height: '23rem', background: item?.daerahKhusus === "Kuota khusus 3T" ? "#F6FBFD" : "#FFF" }}  >
          {user?.email === item?.email ? <CloseButton onClick={handleDelete} /> : ""}
          <Card.Img variant="top" src={item?.gambar} style={{ width: '10rem' }} className="mx-auto mt-2" />
          <Card.Body className="mx-auto text-center">
            <Card.Title>{item?.namaUniversitas}</Card.Title>
            <Card.Text>
              <i className="bi bi-calendar4-event"></i> {format(item?.tanggal, "dd-MM-yyyy")}
            </Card.Text>
            <div className='flex'>
              {!item?.status ? <Badge bg="secondary" className="me-2">expired</Badge> : <Badge bg="success" className="me-2">Active</Badge>}
              {item?.daerahKhusus === "Kuota khusus 3T" ? <Badge bg="primary">Kuota khusus 3T</Badge> : <Badge bg="dark">Nasional</Badge>}
              {item?.approved ? <Badge bg="success"><i className="bi bi-check-circle"></i> WomenRise3T approved</Badge> : ""}
            </div>
            {item?.nama ? <small>By: {item?.nama}</small> : ""}
          </Card.Body>
        </Card >
      </a>
    </Col>
  );
}

export default CardScholarship;