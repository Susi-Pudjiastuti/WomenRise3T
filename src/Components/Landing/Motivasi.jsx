import petik from '../../assets/icon/petik.svg'
import arrow from '../../assets/icon/arrow-right-white.svg'
function Motivasi() {
  return (
    <div>
       <article className="background-lightblue border-bottom ">
        <div className="container px-5 px-md-0 py-5 text-center ">
            <h2 className="text-center fw-bold button-style-text ">Motivasi Untuk Kamu</h2>
            <p className='mb-4'>Dapatkan kutipan motivasi pribadi khusus untuk kamu! <span className='fw-bold fst-italic'>Tampilan berikut hanya contoh.</span></p>
            <div className='p-5 bg-white shadow-sm rounded mx-auto d-flex flex-column' style={{width: '75%'}}>
              <img src={petik} style={{width: '30px'}} />
              <p className='text-center mt-3 button-style-text fw-semibold'>Indah dari Lombok Barat, kamu memiliki kekuatan untuk melewati setiap tantangan, dan pendidikan adalah jalan menuju masa depan yang lebih baik. Sebagai perempuan dari 3T, perjalananmu penuh makna dan potensimu tak terbatas. Percayalah pada dirimu, jaga pikiran positif, dan biarkan tekadmu membuka jalan menuju kesuksesan. Setiap langkah kecilmu membawa perubahan besar.</p>
              <img src={petik} style={{width: '30px'}} className='align-self-end'/>
            </div>

            <div className="button-style-navy px-3 py-2 d-inline-flex align-items-center mt-4" >Cek Selengkapnya<img className="ms-1" src={arrow} /></div>
        </div>
        </article>
    </div>
  )
}

export default Motivasi