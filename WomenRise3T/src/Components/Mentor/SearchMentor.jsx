

const SearchMentor = () => {
  return (
    <>
      <form className="d-flex ">
        <input type="search" className="form-control" placeholder="Nama Mentor" aria-label="Search"
          aria-describedby="basic-addon1" autoFocus autoComplete="off" />
        <button className="input-group-text" id="basic-addon1">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </>
  )
}

export default SearchMentor
