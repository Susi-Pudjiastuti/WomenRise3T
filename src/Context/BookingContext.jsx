import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'
import Swal from "sweetalert2";

export const BookingContext = createContext();

function BookingProvider({ children }) {
    const [bookings, setBookings] = useState([]);
    const [bookingsFalse, setBookingsFalse] = useState([]);
    const [mentorships, setMentorships] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //function untuk mengambil data booking user
    const getBookings = useCallback(async (mentorshipStatus) => {
        const token = localStorage.token;
        // console.log("token: " + token)
        setLoading(true)
        console.log(mentorshipStatus)
        if (!token) {
            console.error("Token not available or invalid");
            setLoading(false);
            return;
        }

        try {
            let URL = ""
            let setState
            if (mentorshipStatus) {
                URL = `https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/bookings?mentorshipStatus=true`;
                setState = setBookings

            } else {
                URL = `https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/bookings?mentorshipStatus=false`;
                setState = setBookingsFalse

            }


            const response = await axios.get(URL, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            // console.log("Response data:", response.data.data);
            console.log(setState)

            setState(response.data.data);
            setLoading(false);
        } catch (e) {
            console.log(e)
            setError(e.message)
            setLoading(false)
        }
    }, []);


    //mengambil mentorship untuk ditampilkan di modal
    const fetchMentorships = useCallback(async (mentors) => {
        const mentorId = mentors?._id;
        console.log("mentorid:" + mentorId);
        try {
            const response = await axios.get(`https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/mentorships?mentorId=${mentorId}`, {
            });
            setMentorships(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching mentorships:', error);
            setError(error.message)
            setLoading(false)
        }
    }, []);


    const fetchMentorshipsCard = useCallback(async (mentors) => {
        const mentorId = mentors?._id;
        console.log("mentorid:", mentorId);
        if (!mentorId) return; // Ensure mentorId is valid before making the request
        try {
            const response = await axios.get(`https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/mentorships?mentorId=${mentorId}`);
            setMentorships(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching mentorships:', error);
            setError(error.message);
            setLoading(false);
        }
    }, []);

    //menambahkan booking 
    const addBooking = async (booking) => {
        // const token = localStorage.token;
        console.log("token: " + token)
        console.log(booking.namaPendaftar)
        setLoading(true)

        if (!token) {
            console.error("Token not available or invalid");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/bookings`,
                {
                    namaPendaftar: booking.namaPendaftar,
                    emailPendaftar: booking.emailPendaftar,
                    noHp: booking.noHp,
                    alasanMendaftar: booking.alasanMendaftar,
                    mentorship: booking.mentorship
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
            setMentorships(response.data.data);
            setLoading(false);
            Swal.fire({
                title: "Booking Berhasil!",
                text: "Anda telah terdaftar untuk sesi mentoring. Tunggu maksimal 1 x 24 jam anda akan  di-Invite ke WhatsApp Grup.",
                icon: "success",
            });
        } catch (error) {
            console.error('Error adding mentorships:', error);
            setError(error.message)
            setLoading(false)
            //mengambil error message dari response
            Swal.fire('Error', error.response?.data?.message || 'Failed to book mentorship class', 'error');
        }
    }

    // fungsi delete booking
    const deleteBooking = async (bookingId) => {
        const token = localStorage.token;
        setLoading(true);

        if (!token) {
            console.error("Token not available or invalid");
            setLoading(false);
            return false;
        }

        try {

            await axios.delete(`https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/bookings/${bookingId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });


            setBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));

            setLoading(false);
            return true;
        } catch (error) {
            console.error('Error deleting booking:', error);
            setError(error.message);
            setLoading(false);
            return false;
        }
    };
    return (
        <BookingContext.Provider value={{ bookings, addBooking, loading, error, getBookings, mentorships, fetchMentorships, fetchMentorshipsCard, deleteBooking, bookingsFalse }}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider;