import React from 'react'

const CardSmall = () => {
  return (
    <>
      <div className="col-sm-12 col-md-6" id="card-small">
        <div className="card d-block mx-auto d-lg-none m-1" style={{ width: "15rem" }} >
          <img
            src=""
            className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title my-0">halo</h5>
            <p className="my-1">halo</p>
            <small className="d-block my-0"> halo</small>
            <p className="card-text">
            </p>
            <div className="d-flex justify-content-center gap-2">
              <button href="#" className="btn btn-secondary" id="btn-more" >Info <i className="bi bi-arrow-right"></i></button>
              <button href="/booking-page/booking.html" className="btn btn-primary " id="btn-register">Daftar</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default CardSmall
