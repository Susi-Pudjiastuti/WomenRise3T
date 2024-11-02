import React from 'react'
import { useNavigate } from 'react-router-dom'


const CardLarge = ({ mentor }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="card container d-none d-lg-block mb-3 shadow"  >
        <div className="row">
          <div className="col-4"><img
            src={mentor?.avatar}
            className="rounded img-fluid mt-4 " alt="..." style={{ width: "18rem" }} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title my-1 text-blue">{mentor?.namaLengkap} | {mentor?.universitas}</h5>

              <p className="my-0 ">{mentor?.asalDaerah}</p>
              <small className="text-muted my-0 ">mentor rating: {mentor?.rating} | total session: {mentor?.totalSessions}</small>
              <p className="description card-text nav-item border-top  text-justify">{mentor?.deskripsi}</p>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={() => { navigate(`/detail/${mentor?._id}`) }} >Selengkapnya <i className="bi bi-arrow-right"></i></button>
                <button className="btn btn-primary" id="btn-register">Daftar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardLarge
