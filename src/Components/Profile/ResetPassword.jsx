
import React from 'react';
import Swal from 'sweetalert2';
import { useUser } from '../../Context/UserContext';

const ResetPassword = () => {
    const { handlePasswordReset } = useUser();


    const openNewPasswordModal = () => {
        Swal.fire({
            title: 'Ganti Password',
            html: `
            <style> .swal2-input {
                    width: 75%;
                    box-sizing: border-box;
                }
            </style>
            <input id="password" class="swal2-input" placeholder="Password Baru" type="password">
            <input id="confirmPassword" class="swal2-input" placeholder="Masukkan lagi password baru" type="password">
            `,
            confirmButtonText: 'Selesai',
            showCloseButton: true,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                const password = Swal.getPopup().querySelector('#password').value;
                const confirmPassword = Swal.getPopup().querySelector('#confirmPassword').value;

                if (!password || !confirmPassword) {
                    Swal.showValidationMessage('Semua harus diisi');
                    return false;
                }

                if (password !== confirmPassword) {
                    Swal.showValidationMessage('Password tidak cocok');
                    return false;
                }

                return password;
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                handlePasswordReset(result.value);
            }
        });
    };



    return (
        <a style={{ color: "#004987", cursor: "pointer", fontFamily: 'Inter, Sans-Serif', fontSize: '1rem', fontWeight: "bold" }} onClick={openNewPasswordModal}>
            Reset Password
        </a>
    );
};

export default ResetPassword;