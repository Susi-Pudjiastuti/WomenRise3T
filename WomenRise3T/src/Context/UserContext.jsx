// UserContext.jsx
// UserContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ email: '', name: '', asalDaerah: '' });
    const [isNewPasswordModalOpen, setIsNewPasswordModalOpen] = useState(false);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://api/user');
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    };

    const validateOldPassword = async (oldPassword) => {
        try {
            const response = await axios.post('https://api/user/validate-password', { password: oldPassword });
            if (response.data.valid) {
                setIsNewPasswordModalOpen(true);
                return true;
            } else {
                Swal.fire('Error', 'Password anda salah', 'error');
                return false;
            }
        } catch (error) {
            console.error('Error validating password', error);
            Swal.fire('Error', 'Gagal memvalidasi password', 'error');
            return false;
        }
    };

    const handlePasswordReset = async (newPassword) => {
        try {
            await axios.put('https://api/user/password', { password: newPassword });
            setIsNewPasswordModalOpen(false);
            Swal.fire('Success', 'Password updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating password', error);
            Swal.fire('Error', 'Failed to update password', 'error');
        }
    };

    const handleEmailReset = async (newEmail) => {
        try {
            await axios.put('https://api/user/email', { email: newEmail });
            setUser((prevUser) => ({ ...prevUser, email: newEmail }));
            Swal.fire('Success', 'Email updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating email', error);
            Swal.fire('Error', 'Failed to update email', 'error');
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            validateOldPassword,
            handlePasswordReset,
            handleEmailReset,
            isNewPasswordModalOpen,
            setIsNewPasswordModalOpen
        }}>
            {children}
        </UserContext.Provider>
    );
};
