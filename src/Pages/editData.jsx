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
    navigate("/dashboard");
  };

  return (
    <div>
      <div
        className=" py-3 container-fluid"
        style={{ backgroundColor: "#2c12bc" }}
      >
        <div
          style={{ backgroundColor: "grey", width: "100px", height: "30px" }}
        ></div>
      </div>
      <div className="mx-5">
        <div
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "grey",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        ></div>
        <h1>Edit Data</h1>
        <p>Silahkan perbaiki data diri mahasiswa di bawah ini:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setNama(e.target.value)}
            placeholder={data.nama_lengkap}
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "20%" }}
          />
          <select
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            onChange={(e) => setJenis(e.target.value)}
            style={{ width: "20%" }}
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setTanggal(e.target.value)}
            placeholder={data.tanggal_lahir.substring(0, 10)}
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "20%" }}
          />{" "}
          <input
            type="text"
            onChange={(e) => setTempat(e.target.value)}
            placeholder={data.tempat_lahir}
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "20%" }}
          />{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setAlamat(e.target.value)}
            placeholder={data.alamat}
            className="p-1 border border-2 rounded-3 my-1 btn btn-light"
            style={{ width: "40%" }}
          />
          <br />
          <Link to="/dashboard">
            <button className=" btn btn-danger py-1 px-3 border border-0 rounded-1 me-2">
              Cancel
            </button>
          </Link>
          <input
            type="submit"
            className=" btn btn-success py-1 px-3 border border-0 rounded-1"
          />
        </form>
      </div>
    </div>
  );
};
export default EditData;
