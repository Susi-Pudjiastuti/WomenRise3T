import { useState, useContext } from 'react'
import { MentorContext } from '../../Context/MentorContext'

const SearchMentor = () => {
  const [search, setSearch] = useState("")
  const { searchMentor, setSearchMentor } = useContext(MentorContext)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchMentor(search.trim())
  }
  return (
    <>
      <form onSubmit={handleSearch} className="d-flex ">
        <input onChange={(e) => { setSearch(e.target.value) }} type="search" className="form-control" placeholder="Nama atau Universitas" autoFocus autoComplete="off" />
        <button className="input-group-text" id="basic-addon1">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </>
  )
}

export default SearchMentor
