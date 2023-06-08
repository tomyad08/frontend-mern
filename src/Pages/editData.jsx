import React, { useEffect, useState } from "react";
import { API } from "../const/endpoint";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EditData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const [nama, setNama] = useState(data.nama_lengkap);
  const [jenis, setJenis] = useState(data.jenis_kelamin);
  const [tanggal, setTanggal] = useState(data.tanggal_lahir);
  const [tempat, setTempat] = useState(data.tempat);
  const [alamat, setAlamat] = useState(data.alamat);

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      id: data.id,
      nama_lengkap: nama,
      jenis_kelamin: jenis,
      tanggal_lahir: tanggal,
      tempat_lahir: tempat,
      alamat: alamat,
    };
    await axios.put(`http://localhost:8000/mahasiswa/${data.id}`, data);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setNama(e.target.value)}
          placeholder={data.nama_lengkap}
          className="p-2"
        />
        <select className="p-2" onChange={(e) => setJenis(e.target.value)}>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <input
          type="text"
          onChange={(e) => setTanggal(e.target.value)}
          placeholder={data.tanggal_lahir}
          className="p-2"
        />
        <input
          type="text"
          onChange={(e) => setTempat(e.target.value)}
          placeholder={data.tempat_lahir}
          className="p-2"
        />
        <input
          type="text"
          onChange={(e) => setAlamat(e.target.value)}
          placeholder={data.alamat}
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
export default EditData;
