import React from 'react'

const Pagination = () => {
  return (
    <>
      <div className="my-5 d-flex gap-2 justify-content-center" id="button-bottom">
        <button className="btn btn-secondary">Previous</button>
        <button className="btn btn-secondary"  >Next <i className="bi bi-arrow-right"></i></button>
      </div>
    </>
  )
}

export default Pagination
