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
    <div className="container-fluid d-flex justify-content-center my-3">
      <div className="border border-3 rounded-3 p-5">
        <h2 className="text-center">Tambah Data</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setNama(e.target.value)}
            placeholder="nama lengkap"
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
          />{" "}
          <br />
          <select
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
            onChange={(e) => setJenis(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setTanggal(e.target.value)}
            placeholder="tanggal lahir, 08-04-1998"
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
          />{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setTempat(e.target.value)}
            placeholder="tempat lahir"
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
          />{" "}
          <br />
          <input
            type="text"
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="Alamat"
            className="px-2 py-1 my-1 border border-1 border-black rounded-4"
          />{" "}
          <br />
          <div className="d-flex justify-content-around">
            <Link to="/">
              <button className=" btn btn-danger py-1 px-3 border border-0 rounded-4">
                Cancel
              </button>
            </Link>
            <input
              type="submit"
              className=" btn btn-success py-1 px-3 border border-0 rounded-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddData;
