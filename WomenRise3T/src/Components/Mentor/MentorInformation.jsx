

const MentorInformation = ({ mentors }) => {
  return (
    <div>
      <h3 className="text-blue text-center mb-4">{mentors?.namaLengkap} - Mentor WomenRise3T</h3>
      <p className="my-0"><span className="text-blue fw-bold">Wilayah asal: </span> {mentors?.asalDaerah}</p>
      <p className="my-0"><span className="text-blue fw-bold">Pendidikan: </span> {mentors?.universitas}</p>
      <img
        src={mentors?.avatar}
        className="d-block d-md-none img-fluid mx-auto pt-3" alt="" />
      <button className="d-block d-md-none mx-auto btn btn-primary w-100 px-3" > <i className="bi bi-check2-square"></i> Daftar Mentorship <i
        className="bi bi-arrow-right"></i></button>
      <p className="text-justify my-3">{mentors?.deskripsi}</p>
      <p className="text-blue fw-bold">Prestasi:</p>
      <ul className="text-justify">
        {mentors?.prestasi?.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default MentorInformation
