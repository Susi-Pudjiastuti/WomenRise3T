import logo from '../assets/logo/Logo WomenRise3T.svg'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container-fluid px-0 px-lg-5 py-2 mx-5 d-flex gap-5">
                
                <div className="d-flex gap-2 align-items-center">
                    <img src={logo}  width="48" height="auto"/>
                    <a href=""><div className="vesper-libre-bold pt-2" id="nav-title">WomenRise3T</div></a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-text gap-4 gap-lg-5 flex-grow-1 ms-0 ms-lg-5">
                        <li className="nav-item "><a href="">Home</a></li>
                        <li className="nav-item"><a href="">About us</a></li>
                        <li className="nav-item"><a href="">Mentor</a></li>
                        <li className="nav-item"><a href="">Motivation</a></li>
                    </ul>

                    {/* <div className="my-4 my-lg-0 d-flex gap-2 align-items-center">
                        <a className="btn button-style-outline px-3 py-2" href="/Login-page/login.html">Log Out</a>
                    </div> */}
                    <div className="my-4 my-lg-0 d-flex gap-2 align-items-center">
                        <a className="btn button-style-text" href="">Sign Up</a>
                        <a className="btn button-style-navy px-3 py-2" href="">Log In</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar