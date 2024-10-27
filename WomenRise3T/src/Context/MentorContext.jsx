import { createContext, useState } from 'react';

export const MentorContext = createContext([])

export default function MentorContextProvider({ children }) {
  const [searchMentor, setSearchMentor] = useState("")
  return (
    <MentorContext.Provider value={{ searchMentor, setSearchMentor }}>
      {children}
    </MentorContext.Provider>
  )
}