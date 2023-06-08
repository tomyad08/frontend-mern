import React, { useEffect, useState } from "react";
import { API } from "../const/endpoint";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState(" ");
  const [jenis, setJenis] = useState(" ");
  const [tanggal, setTanggal] = useState(" ");
  const [tempat, setTempat] = useState(" ");
  const [alamat, setAlamat] = useState(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      nama_lengkap: nama,
      jenis_kelamin: jenis,
      tanggal_lahir: tanggal,
      tempat_lahir: tempat,
      alamat: alamat,
    };
    await axios.post(API.ADD_MAHASISWA, data);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setNama(e.target.value)}
          placeholder="nama lengkap"
          className="p-2"
        />
        <select className="p-2" onChange={(e) => setJenis(e.target.value)}>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <input
          type="text"
          onChange={(e) => setTanggal(e.target.value)}
          placeholder="tanggal lahir"
          className="p-2"
        />
        <input
          type="text"
          onChange={(e) => setTempat(e.target.value)}
          placeholder="tempat lahir, contoh 08-04-1998"
          className="p-2"
        />
        <input
          type="text"
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Alamat"
          className="p-2"
        />
        <input type="submit" />
      </form>
      <div>
        <Link to="/">
          <button className=" btn py-1 px-3">Cancel</button>
        </Link>
      </div>
    </div>
  );
};
export default AddData;
