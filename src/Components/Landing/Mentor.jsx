import arrow from '../../assets/icon/arrow-right-white.svg'

function Mentor() {
  return (
    <div>
        <article className="border-bottom">
        <div className="container px-5 px-md-0 py-5 text-center">
            <h2 className=" fw-bold button-style-text">Tanya Mentor!</h2>
            <p className="">Bingung langkah selanjutnya setelah daftar beasiswa apa? tanya kan aja langsung ke mentor.</p>

            {/* <!-- card --> */}
                <div id="list-mentor" className="row justify-content-center my-0 my-md-5 gy-4">
                    {/* data mentor */}
                </div>
            
            <a className="button-style-navy px-3 py-2 mt-4 mt-md-0 d-inline-flex align-items-center" href="/mentor/mentor.html">Cek Selengkapnya<img className="ms-1" src={arrow} /></a>
            </div>
        </article>
    </div>
  )
}

export default Mentor