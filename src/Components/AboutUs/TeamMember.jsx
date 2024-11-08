import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton'; // Import Skeleton


const TeamMember = ({ member }) => {
    const [loading, setLoading] = useState(true); // State untuk loading

    useEffect(() => {
        // Simulasi loading selama 1 detik
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Card className="text-center rounded-4 shadow" style={{ width: '14rem' }}>
            {loading ? (
                <>
                    <Skeleton height={200} className="p-3 img-fluid" /> {/* Skeleton untuk gambar */}
                    <Skeleton height={30} width={`80%`} className="mt-3" /> {/* Skeleton untuk nama */}
                    <Skeleton height={20} width={`60%`} className="mt-2" /> {/* Skeleton untuk kota */}
                    <Skeleton height={20} width={`40%`} className="mt-2" /> {/* Skeleton untuk ikon sosial media */}
                </>
            ) : (
                <>
                    <Card.Img variant="top" className='p-3 img-fluid' src={member.img} alt={member.name} />
                    <Card.Body>
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>{member.city}</Card.Text>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: "5px" }}>
                            <FaLinkedin />
                        </a>
                        <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: 'black', cursor: "pointer", }}>
                            <FaGithub />
                        </a>
                    </Card.Body>
                </>
            )}
        </Card>
    );
};

export default TeamMember;
