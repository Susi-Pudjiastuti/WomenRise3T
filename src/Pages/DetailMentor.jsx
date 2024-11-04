import React from "react"
import MentorInformation from "../Components/Mentor/MentorInformation"
import ProfileCard from "../Components/Mentor/ProfileCard"
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { fetchMentorsById } from "../utils/fetch";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Mentor/Loading";
import Skeleton from "react-loading-skeleton";



function DetailMentor() {
    let { id } = useParams()

    const { isPending: loading, error, data } = useQuery({
        queryKey: ["mentor", id],
        queryFn: () => { return fetchMentorsById({ id }) }
    })
    const mentors = data?.data
    if (loading) return <Loading />

    return (
        <>
            <Container className="d-flex my-5 py-5 ">
                <div>
                    <MentorInformation mentors={mentors} />
                </div>
                <div className="d-none d-md-block ms-5 ps-5">
                    <ProfileCard mentors={mentors} />
                </div>
            </Container>
        </>
    )
}

export default DetailMentor