import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'

export const BookingContext = createContext();
      
function BookingProvider({children}) {
    const [bookings, setBookings] = useState([]);
    const [mentorships, setMentorships] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
      
    //function untuk mengambil data booking user

    useEffect(() => {
        getBookings();
    
}, []);

    const getBookings = async () => {
        const token = localStorage.getItem('token');
        console.log("token: " + token)
        setLoading(true)
        console.log("fetching")

        if (!token) {
            console.error("Token not available or invalid");
            setLoading(false);
            return;
        }
    
        try {
            let URL = `https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/bookings`;
        // if (mentorshipStatus) {
        //     URL += `?mentorshipStatus=${mentorshipStatus}`;
        // }

        console.log("Fetching bookings from URL:", URL);

        const response = await axios.get(URL, {
            headers: {
                'Authorization': `Bearer ${token}`, // Make sure `token` is defined in your context
            },
        });
        console.log("Response data:", response.data);

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