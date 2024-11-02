import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardSmall = ({ mentor }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="col-sm-12 col-md-6" id="card-small">
        <div className="card d-block mx-auto d-lg-none m-1" style={{ width: "15rem" }} >
          <img
            src={mentor?.avatar}
            className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title my-0 text-blue">{mentor?.namaLengkap}</h5>
            <p className="my-0">{mentor?.universitas}</p>
            <p className="my-0">{mentor?.asalDaerah}</p>
            <small className="d-block my-0 text-muted">mentor rating: {mentor?.rating} </small>
            <small className="d-block my-0 text-muted">total session: {mentor?.totalSessions}</small>
            <p className="card-text">
            </p>
            <div className="d-flex justify-content-center gap-2">
              <button href="#" className="btn btn-secondary" id="btn-more" onClick={() => { navigate(`/detail/${mentor?._id}`) }} >Info <i className="bi bi-arrow-right"></i></button>
              <button className="btn btn-primary " id="btn-register">Daftar</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default CardSmall
