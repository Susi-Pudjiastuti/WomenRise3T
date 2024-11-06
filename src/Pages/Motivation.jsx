import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Typewriter from 'typewriter-effect';
import { GenerateMotivation } from '../utils/fetch';
import { useQuery } from '@tanstack/react-query';




function Motivation() {

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    // default 3 jika tidak ada saved limit (belum dipencet)
    const [limit, setLimit] = useState(() => {
        const savedLimit = parseInt(localStorage.getItem('limit'), 10);
        return isNaN(savedLimit) ? 2 : savedLimit;
    });

    // Function to check if the limit needs to reset based on the date
    const checkLimitReset = () => {
        const today = new Date().toLocaleDateString();
        const savedDate = localStorage.getItem('lastGeneratedDate');

        if (savedDate !== today) {
            localStorage.setItem('limit', 3); // Reset limit to 3
            localStorage.setItem('lastGeneratedDate', today); // Save today's date
            setLimit(2);
        }
    };


    useEffect(() => {
        checkLimitReset();
    }, []);



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

        if (limit > 0) {
            await refetch()
            const newLimit = limit - 1;
            setLimit(newLimit); // Update state
            localStorage.setItem('limit', newLimit); // Persist new limit
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Limit reach, come back again tomorrow`,
            });
            ;
        }


    }



    return (
        <>
            <div className='my-5 min-vh-100'>
                <h2 className='text-center text-blue' style={{ fontSize: '2rem', fontWeight: 'bold' }}>AI RiseGuide3T✨</h2>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                </div>

                <Container className="mt-5 w-75 mx-auto">

                    <div className=' border shadow p-3 my-5 bg-body rounded text-center' style={{ height: 'auto' }} >

                        <button className="btn btn-primary" onClick={handleGenerate} id="btn-more" >Generate</button>
                        {localStorage.token ? <p class="text-muted">Limit : {limit}/2</p> : ""}
                        <div className='my-5'>
                            {loading ? <h5 className="text-blue"><Typewriter
                                options={{
                                    strings: `Generate personal motivation for ${user.namaLengkap} from ${user.asalDaerah}✨`,
                                    autoStart: true,
                                    delay: 30,
                                    cursor: ""
                                }} /> </h5> : ""}
                            {motivations && localStorage.token ? (<h4 className='text-blue'><Typewriter
                                options={{
                                    strings: motivations,
                                    autoStart: true,
                                    delay: 30,
                                    cursor: ""
                                }} /></h4>) : (<h5 className='text-center py-3 my-5'>
                                    <Typewriter
                                        options={{
                                            strings: "Hello! Welcome to AI RiseGuide3T, your personal companion on the journey to achieving your scholarship dreams. We're here to inspire, guide, and empower you every step of the way with personalized motivation tailored just for you🎀",
                                            autoStart: true,
                                            delay: 30,
                                        }} />
                                </h5>)}
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Motivation