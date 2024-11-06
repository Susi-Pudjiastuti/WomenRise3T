
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [isNewPasswordModalOpen, setIsNewPasswordModalOpen] = useState(false);
    const [user, setUser] = useState({
        email: '',
        namaLengkap: '',
        asalDaerah: ''
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUser({
                email: user.email,
                namaLengkap: user.namaLengkap,
                asalDaerah: user.asalDaerah
            });
        } else {
            console.log('user not found');
        }
    }, []);

    const handlePasswordReset = async (newPassword) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/users/update/password',
                { password: newPassword },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            Swal.fire('Success', 'Password updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating password:', error);
            Swal.fire('Error', error.response?.data?.message || 'Failed to update password', 'error');
        }
    };

    const handleEmailReset = async (newEmail) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/users/update/email',
                { email: newEmail },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            setUser((prevUser) => ({ ...prevUser, email: newEmail }));
            Swal.fire('Success', 'Email updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating email:', error);
            Swal.fire('Error', error.response?.data?.message || 'Failed to update email', 'error');
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            handlePasswordReset,
            handleEmailReset,
            isNewPasswordModalOpen,
            setIsNewPasswordModalOpen
        }}>
            {children}
        </UserContext.Provider>
    );
};