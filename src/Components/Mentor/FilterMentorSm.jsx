import React from 'react'
import SearchMentor from './SearchMentor'
import SelectMentor from './SelectMentor'

const FilterMentorSm = () => {
  return (
    <>
      <div className="col-3  d-none d-lg-block" >
        <section className="kategori">
          <h3 className="text-muted py-3 ">Kategori</h3>
          <SelectMentor />
        </section>

        {/* <!-- Cari Mentor --> */}
        <section className="search" id="cari-mentor">
          <h3 className="text-muted py-3 ">Cari Mentor</h3>
          <SearchMentor />
        </section>
      </div>
    </>
  )
}

export default FilterMentorSm
