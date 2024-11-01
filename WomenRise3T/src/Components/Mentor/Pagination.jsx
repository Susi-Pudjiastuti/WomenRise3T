import React from 'react'
import { MentorContext } from '../../Context/MentorContext'
import { useContext } from 'react'

const Pagination = () => {
  const { page, setPage, dataMentor } = useContext(MentorContext)
  const currentPage = dataMentor?.pagination?.currentPage

  return (
    <>
      <div className="my-5 d-flex gap-2 justify-content-center align-items-center" id="button-bottom">
        {currentPage === 1 ? "" :
          <>
            <button className="btn btn-secondary"
              onClick={() => {
                if (currentPage > 0) setPage(currentPage - 1)
              }}><i className="bi bi-arrow-left" /> Previous</button>
          </>}
        <p className="my-0">Page {currentPage} </p>
        {currentPage === 3 || dataMentor?.data.length < 4 ? "" :
          <button className="btn btn-secondary" onClick={() => { setPage(currentPage + 1) }} >Next <i className="bi bi-arrow-right"></i></button>}
      </div>
    </>
  )
}

export default Pagination
