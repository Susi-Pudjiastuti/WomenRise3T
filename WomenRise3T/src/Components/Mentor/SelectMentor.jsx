import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { MentorContext } from '../../Context/MentorContext';

const SelectMentor = () => {
  const { studi, setStudi, setDaerah, daerah, setPage } = useContext(MentorContext)

  return (
    <>
      <Form.Select onChange={(e) => { setPage(""); setStudi(e.target.value); }} value={studi} >
        <option value="" >Studi</option>
        <option key="Studi Dalam Negeri" value="Studi Dalam Negeri">Studi Dalam Negeri</option>
        <option key="Studi Luar Negeri" value="Studi Luar Negeri">Studi Luar Negeri</option>
      </Form.Select>
      {/* <!-- kategori dropdown menu 2 --> */}
      <Form.Select onChange={(e) => { setDaerah(e.target.value) }} value={daerah}>
        <option value="">Daerah asal 3T</option>
        <option value="Papua">Papua</option>
        <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
        <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
        <option value="Lampung">Lampung</option>
        <option value="Sulawesi Tengah">Sulawesi Tengah</option>
        <option value="Sumatera Utara">Sumatera Utara</option>
        <option value="Sumatera Barat">Sumatera Barat</option>
        <option value="Sumatera Selatan">Sumatera Selatan</option>
        <option value="Kalimantan Utara">Kalimantan Utara</option>
      </Form.Select>
    </>
  )
}

export default SelectMentor
