import Navbar from "../../Navigation/Navbar.jsx"
import FAQ from "./FAQ"
import Hero from "./Hero"
import Mentor from "./Mentor"
import Motivasi from "./Motivasi"
import Tentang from "./Tentang"
import Testimoni from "./Testimoni"
import whatsapp from '../../assets/icon/whatsapp.svg'
import Footer from "../../Navigation/Footer.jsx"
import {sponsor1, sponsor2, sponsor, sponsor3, sponsor4} from '../../assets/sponsor/index.jsx'

function LandingFull() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Tentang />
        <Motivasi />
        <Mentor/>
        <Testimoni />
        <FAQ />

        {/* Sponsor */}
        <section className="background-lightblue border-bottom">
            <div className="container px-5 px-md-0 py-5 text-center">
                <h2 className="button-style-text fw-bold">Sponsors</h2>
                <div className="row py-4 px-5 gy-5">
                    <div className="col">
                        <img src={sponsor1} height="32" width="auto"/>
                    </div>
                    <div className="col">
                        <img src={sponsor} height="32" width="auto"/>
                    </div>
                    <div className="col">
                        <img src={sponsor3} height="32" width="auto"/>
                    </div>
                    <div className="col">
                        <img src={sponsor4} height="32" width="auto"/>
                    </div>
                    <div className="col">
                    <img src={sponsor2} height="32" width="auto"/>
                    </div>
                </div>
            </div>
        </section>

        {/* contact us */}
        <section>
            <div className="container px-5 px-md-0 py-5 text-center">
                <h2 className="fw-bold mb-4">Ada pertanyaan? Hubungi kami!</h2>
                <a className="button-style-navy px-4 py-3 d-inline-flex align-items-end fw-semibold"  style={{backgroundColor: "#00D95F"}}><img className="me-2" src={whatsapp}/>WhatsApp</a>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default LandingFull