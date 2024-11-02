import { createContext, useState } from 'react';

export const MentorContext = createContext([])

export default function MentorContextProvider({ children }) {
  const [searchMentor, setSearchMentor] = useState("")
  const [dataMentor, setDataMentor] = useState("")
  const [page, setPage] = useState(null)
  return (
    <MentorContext.Provider value={{ searchMentor, setSearchMentor, page, setPage, dataMentor, setDataMentor }}>
      {children}
    </MentorContext.Provider>
  )
}