
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
        setLoading(true);
        try {
            // Ambil token dari localStorage
            const token = localStorage.getItem('token');

            // Tambahkan headers dengan token
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };

            const response = await axios.get('http://localhost:3000/user', config);

            if (response.data) {
                setUser(response.data);
            } else {
                throw new Error('No data received from server');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);

            // Handle specific error cases
            if (error.response) {
                // Server responded with error
                switch (error.response.status) {
                    case 401:
                        setError('Unauthorized access. Please login again.');
                        break;
                    case 404:
                        setError('User data not found.');
                        break;
                    default:
                        setError(`Server error: ${error.response.data.message || 'Unknown error'}`);
                }
            } else if (error.request) {
                // Request made but no response
                setError('Cannot connect to server. Please check your internet connection.');
            } else {
                // Other errors
                setError('An error occurred while loading data.');
            }

            // Show error using SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Error Loading Data',
                text: error.response?.data?.message || 'Failed to load user data',
            });
        } finally {
            setLoading(false);
        }
    };


    const handlePasswordReset = async (newPassword) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:3000/user/update/password',
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
            await axios.put('http://localhost:3000/user/update/email',
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