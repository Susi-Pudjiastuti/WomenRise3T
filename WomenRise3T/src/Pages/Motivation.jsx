import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Button from 'react-bootstrap/Button';




function Motivation() {

    return (
        <>
            <div className='mt-5 pt-5 min-vh-100'>
                <h2 className='text-center text-primary'>AI RiseGuide3T✨</h2>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    {/* <Button onClick={handleInput}>Generate motivation</Button>
                    <p>Limit: {limit}/3</p> */}
                </div>

                <Container className="mt-5 w-75 mx-auto">
                    {/* {isFill ? */}
                    < h4 className='text-primary'>
                        <Typewriter
                            options={{
                                // strings: isLoading ? `Generate Motivations for ${localStorage.name} from ${localStorage.city}✨` : motivations,
                                strings: `testing`,
                                autoStart: true,
                                delay: 1,
                                cursor: "",
                            }}
                        />
                    </h4>

                    <h5 className='text-center mt-5 pt-5'>
                        <Typewriter
                            options={{
                                strings: "Hello! Welcome to RiseGuide3T, your personal companion on the journey to achieving your scholarship dreams. We're here to inspire, guide, and empower you every step of the way with personalized motivation tailored just for you🎀",
                                autoStart: true,
                                delay: 30,
                            }} />
                    </h5>
                    {/* } */}

                </Container>
            </div>

        </>
    )
}

export default Motivation