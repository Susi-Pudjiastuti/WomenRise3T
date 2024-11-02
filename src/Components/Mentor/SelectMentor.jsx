import React from 'react'
import Form from 'react-bootstrap/Form';

const SelectMentor = () => {
  return (
    <>
      <Form.Select aria-label="Default select example">
        <option>Studi</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      {/* <!-- kategori dropdown menu 2 --> */}
      <Form.Select aria-label="Default select example">
        <option>Daerah asal 3T</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </>
  )
}

export default SelectMentor
