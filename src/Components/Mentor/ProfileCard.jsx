import RegisModal from "../Modal/RegisModal"


const ProfileCard = ({ mentors }) => {
  return (
    <>
      <div className="card mx-auto d-none d-md-block" style={{ width: "18rem" }}>
        <img
          src={mentors?.avatar}
          className="card-img-top p-3" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{mentors?.namaLengkap}</h5>
          <h6 >{mentors?.asalDaerah}</h6>
          <p className="text-muted my-0">Rating Mentor: {mentors?.rating}</p>
          <p className="text-muted">Total Sessions: {mentors?.totalSessions}</p>
          <RegisModal/>
        </div>
      </div>

      
    </>
  )
}

export default ProfileCard
