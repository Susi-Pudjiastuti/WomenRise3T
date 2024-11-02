
import SearchMentor from './SearchMentor';
import SelectMentor from './SelectMentor';

const FilterMentorLg = () => {
  return (
    <>
      <section className="search d-block d-lg-none" id="cari-mentor">
        <h3 className="text-muted text-center py-3 ">Cari Mentor</h3>
        {/* <!-- input search mentor --> */}
        <div className="d-flex flex-column justify-content-center gap-3">
          <SearchMentor />
          <SelectMentor />
        </div>
      </section>
    </>
  )
}

export default FilterMentorLg
