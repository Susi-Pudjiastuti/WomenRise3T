import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'

export const BookingContext = createContext();
      
function BookingProvider({children}) {
    const [bookings, setBookings] = useState([]);
    const [mentorships, setMentorships] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

      
    //function untuk mengambil data booking user
    useEffect(()=> {
        getBookings()
    }, [])

    const getBookings = async (mentorshipStatus) => {
        setLoading(true)

        try {
            // konfigurasi request dengan token dalam header
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`, //token untuk otentikasi
            //     },
            //     params: {
            //         mentorshipStatus,
            //     },
            // };
      
            let URL = `https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/bookings?mentorshipStatus=${mentorshipStatus}`;
            // const 
            const response = await axios.get(URL)
            setBookings(response.data.data);
            setLoading(false);

        }catch(e){
            console.log(e)
            setError(e.message)
            setLoading(false)
        }
    }

    //mengambil mentorship untuk ditampilkan di modal
    
    const fetchMentorships = useCallback(async (mentors) => {
        const mentorId = mentors?._id;
        // console.log("mentorid:" + mentorId);
        try {
          const response = await axios.get(`https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/mentorships?mentorId=${mentorId}`, {
          });
          setMentorships(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching mentorships:', error);
          setError(e.message)
          setLoading(false)
        }
    }, []);
  return (
    <BookingContext.Provider value={{bookings, loading, error, getBookings, mentorships, fetchMentorships}}>
        {children}
    </BookingContext.Provider>
  )
}

export default BookingProvider;