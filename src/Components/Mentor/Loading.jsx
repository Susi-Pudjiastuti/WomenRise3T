const Loading = () => {
  return (
    <><div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 mx-2">loading</p>
    </div>
    </>
  )
}

export default Loading