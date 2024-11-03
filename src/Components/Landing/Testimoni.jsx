import axios from "axios";
import { useEffect, useState } from "react";
import petik from "../../assets/icon/petik.svg"
function Testimoni() {
  const [testi, setTesti] = useState([]);

  useEffect(() => {
    getTestimoni();
  }, []);

  let URL = "http://localhost:3000/users";

  const getTestimoni = () => {
    axios
      .get(URL)
      // .then((data) => console.log(data.data.dataTestimonies[0]))
      .then((data) => setTesti(data.data.dataTestimonies))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <article className="background-lightblue border-bottom">
        <div className="container px-5 px-md-0 py-5">
          <h2 className="text-center fw-bold button-style-text">
            Testimoni Pengguna
          </h2>
          {/* <div>
            {testi.map((items, index) => (
              <p key={index}>{items.namaLengkap}</p>
            ))}
          </div> */}

          {/* <!-- Card --> */}
          <div className="row my-4">
            <div
              className="d-flex gap-3 flex-column flex-lg-row"
              id="list-testi"
            >
              {testi.map((items, index) => (
                <div key={index}>
                 <div class="card" >
                    <div class="card-body d-flex flex-column justify-content-between p-4">
                      <div>
                      <img src={petik} width="32" height="auto" />
                      <p class="card-text p-2">{items.testimoni}</p>
                      </div>

                      <div class="d-flex align-items-center mt-2">
                        <img class="rounded-img object-fit-cover" src={items.avatar} width="40" height="40"/>
                        <div class="d-flex flex-column ms-2">
                        <p class="m-0 fw-bold button-style-text" id="testimony-profile">{items.namaLengkap}</p>
                        <p class="m-0" id="testimony-profile">{items.asalDaerah}</p>
                        </div>
                      </div>

                    </div>
                 </div>
                </div>
              ))}

              
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Testimoni;
