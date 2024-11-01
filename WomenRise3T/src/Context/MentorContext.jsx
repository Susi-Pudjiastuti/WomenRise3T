import { createContext, useState } from 'react';

export const MentorContext = createContext([])

export default function MentorContextProvider({ children }) {
  const [searchMentor, setSearchMentor] = useState("")
  const [studi, setStudi] = useState("")
  const [daerah, setDaerah] = useState("")
  const [dataMentor, setDataMentor] = useState("")
  const [page, setPage] = useState(null)
  return (
    <MentorContext.Provider value={{ daerah, setDaerah, searchMentor, setSearchMentor, page, setPage, dataMentor, setDataMentor, studi, setStudi }}>
      {children}
    </MentorContext.Provider>
  )
}