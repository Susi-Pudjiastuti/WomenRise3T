import logo from "../assets/logo/Logo WomenRise3T.svg"
import facebook from "../assets/icon/facebook.svg"
import instagram from "../assets/icon/instagram.svg"

function Footer() {
  return (
    <div>
        <footer className="border-top">
        <div className="container px-5 px-md-0">
            
            <div className="row pt-5 pb-4 gy-4 ">
                <div className="col-sm-4">
                    <div className="vesper-libre-bold mb-3">
                        <img src={logo} width="32" height="auto" />
                        WomenRise3T
                    </div>
                    <div className="text-body-tertiary">Jalan Inspirasi No. 123, Jakarta, Indonesia</div>
                    <div className="text-body-tertiary mb-3">Telepon: +62 8123 456 7890</div>
                    <img src={facebook} className="me-2" width="24" height="24" />
                    <img src={instagram} width="24" height="24" />
                </div>
                    
                <div className="col-sm col-md">
                    <p>Get Help</p>
                    <a className="text-body-tertiary" href=""><p>FAQ</p></a>
                    <a className="text-body-tertiary" href=""><p>Contact us</p></a>
                    <a className="text-body-tertiary" href=""><p>Support us</p></a>

                </div>
                <div className="col-sm col-md">
                    <p>Our Program</p>
                    <a className="text-body-tertiary" href=""><p>Mentorship</p></a>
                    <a className="text-body-tertiary" href=""><p>Scholarship</p></a>
                    <a className="text-body-tertiary" href=""><p>Community</p></a>
                </div>
                <div className="col-sm col-md">
                    <p>Company</p>
                    <a className="text-body-tertiary" href=""><p>About us</p></a>
                    <a className="text-body-tertiary" href=""><p>Our Team</p></a>
                    <a className="text-body-tertiary" href=""><p>Our Impact</p></a>
                </div>
            </div>
            
            <hr />
            <p className="text-body-tertiary mb-5"> &copy; 2024 WomenRise3T. All Rights Reserved.</p>
        </div>
     </footer>
    </div>
  )
}

export default Footer