import React from "react"
import { useState } from 'react';
import FilterMentorLg from "../Components/Mentor/FilterMentorLg";
import FilterMentorSm from "../Components/Mentor/FilterMentorSm";
import Pagination from "../Components/Mentor/Pagination";
import CardSmall from "../Components/Mentor/CardSmall";
import CardLarge from "../Components/Mentor/CardLarge";
import { useQuery } from "@tanstack/react-query";
import { fetchMentors } from "../utils/fetch";




function Mentor() {

    const { isPending: loading, error, data: mentors } = useQuery({
        queryKey: ["mentor"],
        queryFn: () => { return fetchMentors() }
    })
    console.log(mentors)

    return (
        <>
            {/* <!-- Content --> */}
            <div className="container my-5">
                <div>
                    <h2 className="text-blue">Mentor - mentor kami</h2>
                    <p className="text-muted">Pilih mentor sesuai kebutuhanmu dan mulai sesi mentoring sekarang</p>
                </div>
                <FilterMentorLg />

                <div className="container ">
                    <div className="row">
                        <FilterMentorSm />
                        <div className="col-1 d-none d-lg-block"></div>
                        <div className="col">
                            <h3 className="text-blue py-3" >Daftar Mentor</h3>

                            {/* <!-- card mentor --> */}
                            <section className="mentor">
                                {/* <!-- layar besar --> */}
                                <div id="card-large">
                                    {mentors?.map((mentor, index) => <CardLarge mentor={mentor} key={index} />)}
                                </div>
                            </section>

                            {/* <!-- layar kecil--> */}
                            <div className="container-fluid">
                                <div className="row g-3" id="card-small">
                                    {mentors?.map((mentor, index) => <CardSmall mentor={mentor} key={index} />)}
                                </div>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mentor