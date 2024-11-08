import { NavLink } from 'react-router-dom'
import arrow from '../../assets/icon/arrow-right.svg'
import girl from '../../assets/image/girl.svg'


function Hero() {
  return (
    <div>
      <section className="background-lightblue border-bottom">
        <div className="container px-5 px-md-0">
          <div className="row align-items-center py-5">

            <div className="col-lg-7 d-inline-flex flex-column gap-3">
              <h1 className="fw-bold ">Raih Masa Depanmu bersama <span className="button-style-text">WomenRise3T</span></h1>
              <p className="text-body-secondary">Meraih impian melalui pendidikan dan kesempatan beasiswa. Bergabunglah bersama kami dan dapatkan bimbingan yang kamu butuhkan untuk sukses.</p>
              <div className="mb-5 d-inline-flex align-items-center">
                <a className="button-style-navy px-3 py-2 me-4" href="">Saya perempuan 3T</a>
                <NavLink to="/mentor">
                  <div className="button-style-text text-dark" >Temukan Mentor <img src={arrow} /></div>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-3  ">
              <img className="custom-img " src={girl} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero