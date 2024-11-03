import arrow from '../../assets/icon/arrow-right-white.svg'
import univ from '../../assets/icon/Vector.svg'
import location from '../../assets/icon/location.svg'
import { useQuery } from "@tanstack/react-query";
import { fetchMentors } from "../../utils/fetch";

function Mentor() {

  const { isPending: loading, data } = useQuery({
    queryKey: ["mentor"],
    queryFn: () => { return fetchMentors({ }) }
})
  const mentors = data?.data

  return (
    <div>
        <article className="border-bottom">
        <div className="container px-5 px-md-0 py-5 text-center">
            <h2 className=" fw-bold button-style-text">Tanya Mentor!</h2>
            <p className="">Bingung langkah selanjutnya setelah daftar beasiswa apa? tanya kan aja langsung ke mentor.</p>

            {/* <!-- card --> */}
                <div id="list-mentor" className="row justify-content-center my-0 my-md-5 gy-4">

                  {mentors?.map((mentor, index) => (
                        <div className="col-md-4 d-flex justify-content-center">
                          <div className="card background-lightblue" style={{width: "18rem"}}>
                            <img src={mentor?.avatar} className="card-img-top" alt="..." />
                            <div class="card-body">
                              <h4 class="fw-bold">{mentor?.namaLengkap}</h4>
                              <hr></hr>
                              <p class="m-0 text-start"><img class="me-2" src={univ}/>{mentor?.universitas}</p>
                              <p class="m-0 text-start"><img class="me-2" src={location}/>{mentor?.asalDaerah}</p>
                            </div>
                          </div>
                        </div>
                  ))}

                </div>
            
            <a className="button-style-navy px-3 py-2 mt-4 mt-md-0 d-inline-flex align-items-center" href="/mentor/mentor.html">Cek Selengkapnya<img className="ms-1" src={arrow} /></a>
            </div>
        </article>
    </div>
  )
}

export default Mentor