
import React from 'react';
import Swal from 'sweetalert2';
import { useUser } from '../../Context/UserContext';

const ResetPassword = () => {
    const { validateOldPassword, handlePasswordReset, isNewPasswordModalOpen, setIsNewPasswordModalOpen } = useUser();

    const openOldPasswordModal = () => {
        Swal.fire({
            title: 'Masukkan Password Anda',
            input: 'password',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Selanjutnya',
            showLoaderOnConfirm: true,
            preConfirm: (oldPassword) => {
                if (!oldPassword) {
                    Swal.showValidationMessage('Password harus diisi');
                    return false;
                }
                return validateOldPassword(oldPassword);
            },
            allowOutsideClick: () => !Swal.isLoading()
        });
    };

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

    React.useEffect(() => {
        if (isNewPasswordModalOpen) {
            openNewPasswordModal();
            setIsNewPasswordModalOpen(false);
        }
    }, [isNewPasswordModalOpen]);

    return (
        <a style={{ color: "#004987", cursor: "pointer" }} onClick={openOldPasswordModal}>
            Reset Password
        </a>
    );
};

export default ResetPassword;