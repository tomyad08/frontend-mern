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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataMahasiswa = {
      id: data.id,
      nama_lengkap: nama,
      jenis_kelamin: jenis,
      tanggal_lahir: tanggal,
      tempat_lahir: tempat,
      alamat: alamat,
    };
    await axios.put(
      `http://localhost:8000/mahasiswa/${dataMahasiswa.id}`,
      dataMahasiswa
    );
    navigate("/");
  };

  return (
    <div className="container-fluid d-flex justify-content-center my-3">
      <div className="border border-3 rounded-3 p-5">
        <h2 className="text-center">Edit</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setNama(e.target.value)}
            placeholder={data.nama_lengkap}
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
          />
          <br />
          <select
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
            onChange={(e) => setJenis(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          <br />
          <input
            type="text"
            onChange={(e) => setTanggal(e.target.value)}
            placeholder={data.tanggal_lahir.substring(0, 10)}
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setTempat(e.target.value)}
            placeholder={data.tempat_lahir}
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setAlamat(e.target.value)}
            placeholder={data.alamat}
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
            style={{ width: "100%" }}
          />
          <br />
          <div className="d-flex justify-content-around">
            <Link to="/">
              <button className=" btn btn-danger border border-0 rounded-4 py-1 px-3">
                Cancel
              </button>
            </Link>
            <input
              type="submit"
              className=" btn btn-success border border-0 rounded-4 py-1 px-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditData;
