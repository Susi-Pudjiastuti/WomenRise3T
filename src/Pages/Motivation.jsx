import axios from 'axios';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Typewriter from 'typewriter-effect';
import { GenerateMotivation } from '../utils/fetch';
import { useQuery } from '@tanstack/react-query';




function Motivation() {

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    const { isLoading: loading, refetch, error, data: motivations } = useQuery({
        queryKey: ["motivation"],
        queryFn: GenerateMotivation,
        enabled: false,
    })
    const handleGenerate = async () => {
        if (!localStorage.token) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Silahkan Login Terlebih Dahulu",
            });
            navigate('/login');
            return
        }

        await refetch()




    }


    return (
        <>
            <div className='my-5 min-vh-100'>
                <h2 className='text-center text-blue' style={{ fontSize: '2rem', fontWeight: 'bold' }}>AI RiseGuide3T✨</h2>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    {/* <Button onClick={handleInput}>Generate motivation</Button>
                    <p>Limit: {limit}/3</p> */}
                </div>

                <Container className="mt-5 w-75 mx-auto">
                    {/* {isFill ? */}
                    {/* < h4 className='text-blue'>
                        <Typewriter
                            options={{
                                // strings: isLoading ? `Generate Motivations for ${localStorage.name} from ${localStorage.city}✨` : motivations,
                                strings: `testing`,
                                autoStart: true,
                                delay: 1,
                                cursor: "",
                            }}
                        />
                    </h4> */}

                    <h5 className='text-center py-3 my-5'>
                        <Typewriter
                            options={{
                                strings: "Hello! Welcome to AI RiseGuide3T, your personal companion on the journey to achieving your scholarship dreams. We're here to inspire, guide, and empower you every step of the way with personalized motivation tailored just for you🎀",
                                autoStart: true,
                                delay: 30,
                            }} />
                    </h5>

                    <div className=' border shadow p-3 my-5 bg-body rounded text-center' style={{ height: 'auto' }} >

                        <button className="btn btn-primary" onClick={handleGenerate} id="btn-more" >Generate</button>
                        <div className='my-5 text-blue'>
                            {!localStorage.token && <h4>“Ingatlah bahwa pendidikan adalah kunci untuk membuka pintu kesempatan. Jangan biarkan tantangan menghalangi impianmu. Setiap langkah kecil yang kamu ambil menuju pendidikan adalah langkah besar menuju masa depan yang lebih cerah. Teruslah berjuang, percayalah pada dirimu sendiri, dan raih beasiswa yang kamu impikan. Kamu bisa! 💪✨”</h4>}
                            {loading ? `generate motivation for ${user.namaLengkap}` : ""}
                            {localStorage.token && <h4><Typewriter
                                options={{
                                    strings: motivations,
                                    autoStart: true,
                                    delay: 30,
                                    cursor: ""
                                }} /></h4>}
                        </div>
                    </div>
                    {/* } */}

                </Container>
            </div>

        </>
    )
}

export default Motivation